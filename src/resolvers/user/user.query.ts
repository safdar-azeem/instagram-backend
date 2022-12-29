import { GraphQLError } from 'graphql'
import UserModel from '../../models/user.model'

const UserQueries = {
   me: async (_, __, { user, error }) => {
      if (error) throw error
      return user
   },
   getUserById: async (_, { id }, { error }) => {
      if (error) throw error
      try {
         const user = await UserModel.findById(id)
         if (!user) {
            throw new GraphQLError('User not found')
         }
         return user
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}

export default UserQueries
