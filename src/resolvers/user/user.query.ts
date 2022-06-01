import { GraphQLError } from 'graphql'
import UserModel from '../../models/user.model'
import { QueryResolvers, User } from '../../types/types.generated'

export const UserQueries: QueryResolvers = {
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
         return user as any
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   searchUsersByName: async (_, { name }) => {
      try {
         if (name.length < 2) {
            throw new GraphQLError('Name must be at least 2 characters long')
         }
         const users = await UserModel.find({ name: { $regex: name, $options: 'i' } })
         if (users.length === 0) {
            throw new GraphQLError('No users found')
         }
         return users as any[]
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
