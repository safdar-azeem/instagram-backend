import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(__dirname, '..', '.env') })

import cors from 'cors'
import http from 'http'
import helmet from 'helmet'
import resolvers from './resolvers'
import bodyParser from 'body-parser'
import { WebSocketServer } from 'ws'
import rateLimit from 'express-rate-limit'
import { ApolloServer } from '@apollo/server'
import { useServer } from 'graphql-ws/lib/use/ws'
import express, { Request, Response } from 'express'
import { typeDefs } from './types/typeDefs.generated'
import connectToMongoDB from './config/connectDB.config'
import authMiddleware from './middleware/auth.middleware'
import { expressMiddleware } from '@apollo/server/express4'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { graphqlUploadExpress } from 'graphql-upload-minimal'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

const app = express()
const httpServer = http.createServer(app)
const schema = makeExecutableSchema({ typeDefs, resolvers })

const wsServer = new WebSocketServer({
   server: httpServer,
   path: '/subscriptions',
})

const serverCleenup = useServer(
   {
      schema,
      context: async (ctx: any, msg, args) => {
         if (ctx.connectionParams.Authorization) {
            const { user, error } = await authMiddleware(ctx.connectionParams.Authorization)
            return { user, error }
         }
      },
   },
   wsServer
)

const graphqlLimiter = rateLimit({
   windowMs: 5 * 60 * 1000,
   max: 250,
   message: 'Too many requests to GraphQL endpoint, please try again later.',
})

const server = new ApolloServer({
   schema,
   introspection: true,
   plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
         async serverWillStart() {
            return {
               async drainServer() {
                  await serverCleenup.dispose()
               },
            }
         },
      },
   ],
})

const startApolloServer = async () => {
   try {
      await connectToMongoDB()
      await server.start()

      app.use(
         '/graphql',
         helmet(),
         graphqlLimiter,
         bodyParser.json(),
         cors<cors.CorsRequest>(),
         bodyParser.urlencoded({ extended: true }),
         graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 3 }),
         expressMiddleware(server, {
            context: async (context) => {
               const { user, error } = await authMiddleware(context.req.headers.authorization)
               return { user, error }
            },
         })
      )

      app.get('/', (_req: Request, res: Response) => res.send('🚀 Welcome to the API'))

      const port = parseInt(process.env.PORT || '4004', 10)

      httpServer.listen(port, () => {
         console.log(`🚀  Server ready at: http://localhost:${port}/graphql`)
      })
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

startApolloServer()
