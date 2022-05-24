import { GraphQLError } from 'graphql'
import UserModel from '../../models/user.model'
import { MutationResolvers } from '../../types/types.generated'
import { verifyGoogleCredentials } from '../../utils/googleAuth.utils'

export const AuthMutations: MutationResolvers = {
   register: async (_, { name, email, password }) => {
      try {
         const user = await UserModel.create({ name, email, password })
         return { message: `User ${user.name} created successfully` }
      } catch (err) {
         if (err.code === 11000) {
            throw new GraphQLError('Email already exists')
         }
         throw new GraphQLError('Something went wrong')
      }
   },
   login: async (_, { email, password }) => {
      try {
         const user = await UserModel.findOne({ email })
         if (!user) {
            throw new GraphQLError('User not found')
         }
         const isMatch = await user.comparePassword(password)
         if (!isMatch) {
            if (user.isGoogleUser) {
               throw new GraphQLError('Please login with Google')
            }
            throw new GraphQLError('Invalid credentials')
         }
         const token = user.generateAuthToken()
         return { token }
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   googleLogin: async (_, { token }) => {
      try {
         const userInfo: any = await verifyGoogleCredentials(token)
         const user = await UserModel.findOne({ email: userInfo.email })

         if (!user) {
            const newUser = await UserModel.create({
               name: userInfo.name,
               email: userInfo.email,
               isGoogleUser: true,
               isVerified: true,
               avatar: userInfo.picture,
               password: userInfo.sub.slice(0, 10),
            })
            const token = newUser.generateAuthToken()
            return { token, isNewUser: true }
         }

         if (!user?.isGoogleUser) {
            throw new GraphQLError('Please login with email and password')
         }

         const authtoken = user.generateAuthToken()
         return { token: authtoken, isNewUser: false }
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
