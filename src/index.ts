require('dotenv').config()
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { makeExecutableSchema } from '@graphql-tools/schema'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { PubSub } from 'graphql-subscriptions'
import { graphqlUploadExpress } from 'graphql-upload-minimal'
import { useServer } from 'graphql-ws/lib/use/ws'
import http from 'http'
import { WebSocketServer } from 'ws'
import connectToMongoDB from './config/connectDB.config'
import authMiddleware from './middleware/auth.middleware'
import resolvers from './resolvers'
import typeDefs from './schema'

export const pubsub = new PubSub()
const app = express()
const schema = makeExecutableSchema({ typeDefs, resolvers })

const httpServer = http.createServer(app)
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
         graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
         cors<cors.CorsRequest>(),
         bodyParser.json(),
         bodyParser.urlencoded({ extended: true }),
         expressMiddleware(server, {
            context: async (context) => {
               const { user, error } = await authMiddleware(context.req.headers.authorization)
               return { user, error }
            },
         })
      )
      const port = parseInt(process.env.PORT) || 4000

      httpServer.listen(port, () => {
         console.log(`🚀  Server ready at: http://localhost:${port}/graphql`)
      })
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

startApolloServer()
