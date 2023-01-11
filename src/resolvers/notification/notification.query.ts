import { GraphQLError } from 'graphql'
import { NotificationModel } from '../../models'

const notificationQueries = {
   getNotifications: async (parent: any, args: any, { user, error }: any) => {
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
         return notifications
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}

export default notificationQueries
