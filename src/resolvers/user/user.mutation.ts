import { GraphQLError } from 'graphql'
import UserModel from '../../models/user.model'
import { MutationResolvers } from '../../types/types.generated'
import { removeNotification, sendNotification } from '../notification/notification.mutation'

export const UserMutations: MutationResolvers = {
   updateProfile: async (_, args, { user, error }) => {
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
            removeNotification('follow', user._id, userToFollow._id)
         } else {
            user.following.push(userId)
            userToFollow.followers.push(user._id)
            sendNotification('follow', user._id, userToFollow._id)
         }
         await user.save({ validateBeforeSave: false })
         await userToFollow.save({ validateBeforeSave: false })
         return !isFollowing
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
