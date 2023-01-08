import { GraphQLError } from 'graphql'
import UserModel from '../../models/user.model'

const UserMutations = {
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
         const user = (await UserModel.findOne({ email })) as any
         if (!user) {
            throw new GraphQLError('User not found')
         }
         const isMatch = await user.comparePassword(password)
         if (!isMatch) {
            throw new GraphQLError('Invalid credentials')
         }
         const token = user.generateAuthToken()
         return { token }
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   updateProfile: async (_, args: any, { user, error }) => {
      if (error) throw error
      try {
         await UserModel.findByIdAndUpdate(user._id, args, { new: true })
         return true
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   followOrUnfollowUser: async (_, { userId }, { user, error }) => {
      try {
         if (error) throw error
         const userToFollow = (await UserModel.findById(userId)) as any
         if (!userToFollow) {
            throw new GraphQLError('User not found')
         }
         const isFollowing = user.following.includes(userId)
         if (isFollowing) {
            user.following.pull(userId)
            userToFollow.followers.pull(user._id)
         } else {
            user.following.push(userId)
            userToFollow.followers.push(user._id)
         }
         await user.save({ validateBeforeSave: false })
         await userToFollow.save({ validateBeforeSave: false })
         return !isFollowing
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}

export default UserMutations
