require('dotenv').config()
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload-minimal'
import http from 'http'
import connectToMongoDB from './config/connectDB.config'
import authMiddleware from './middleware/auth.middleware'
import resolvers from './resolvers'
import typeDefs from './schema'

const app = express()
const httpServer = http.createServer(app)

const server = new ApolloServer({
   typeDefs,
   resolvers,
   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
   introspection: process.env.NODE_ENV !== 'production',
})

const startApolloServer = async () => {
   try {
      connectToMongoDB()
      await server.start()
      app.use(
         '/graphql',
         graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
         cors<cors.CorsRequest>({ origin: '*' }),
         bodyParser.json(),
         bodyParser.urlencoded({ extended: true }),
         expressMiddleware(server, {
            context: async (context) => {
               const { user, error } = await authMiddleware(context)
               return { user, error }
            },
         })
      )
      const port = process.env.PORT || 4012
      await new Promise((resolve: any) => httpServer.listen({ port }, resolve))
      console.log(`🚀  Server ready at: http://localhost:${port}/graphql`)
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

startApolloServer()
