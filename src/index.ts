require('dotenv').config()
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import connectToMongoDB from './config/connectDB.config'
import authMiddleware from './middleware/auth.middleware'
import resolvers from './resolvers'
import typeDefs from './schema'

const server = new ApolloServer({
   typeDefs,
   resolvers,
   introspection: process.env.NODE_ENV !== 'production',
})

const startApolloServer = async () => {
   try {
      connectToMongoDB()
      const { url } = await startStandaloneServer(server, {
         context: async (context) => {
            const { user, error } = await authMiddleware(context)
            return { user, error }
         },
         listen: { port: Number(process.env.PORT) || 4012 },
      })
      console.log(`🚀  Server ready at: ${url}`)
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

startApolloServer()
