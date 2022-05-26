import { GraphQLError } from 'graphql'
import NotificationModel from '../../models/notification.modal'
import { QueryResolvers } from '../../types/types.generated'

export const notificationQueries: QueryResolvers = {
   getNotifications: async (parent, args, { user, error }) => {
      try {
         if (error) throw new GraphQLError(error)

         const notifications = await NotificationModel.find({
            _id: {
               $in: user.notifications,
            },
         })
            .populate('sender')
            .populate('receiver')
            .populate('post')
            .sort({ createdAt: -1 })

         return notifications as any
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   countUnSeenNotifications: async (parent, args, { user, error }) => {
      try {
         if (error) throw new GraphQLError(error)
         const count = await NotificationModel.countDocuments({
            receiver: user._id,
            isSeen: false,
         })
         return count
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
