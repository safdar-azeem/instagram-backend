import { GraphQLError } from 'graphql'
import { pubsub } from '../../index'
import { NotificationModel, UserModel } from '../../models'

const sendNotification = async (
   type: string,
   sender: unknown,
   receiver: unknown,
   postId?: unknown,
   commentId?: unknown
) => {
   try {
      if (sender.toString() === receiver.toString()) return
      const notification = await NotificationModel.create({
         sender,
         receiver,
         post: postId,
         comment: commentId,
         type,
      })
      const findNotification = await NotificationModel.findOne({
         sender,
         receiver,
         post: postId,
         comment: commentId,
         type,
      })
      await pubsub.publish('NEW_NOTIFICATION', { newNotification: findNotification })
      await UserModel.findByIdAndUpdate(receiver, { $push: { notifications: notification._id } })
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}

const removeNotification = async (
   type: string,
   sender: unknown,
   receiver: unknown,
   postId?: unknown,
   commentId?: unknown
) => {
   try {
      const notificationObj = { sender, receiver, post: postId, comment: commentId, type }
      const findNotification = await NotificationModel.findOne(notificationObj)
      if (findNotification) {
         await findNotification.remove()
         await UserModel.findByIdAndUpdate(receiver, { $pull: { notifications: findNotification._id } })
      }
      await pubsub.publish('NEW_NOTIFICATION', { newNotification: findNotification })
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}

export { sendNotification, removeNotification }
