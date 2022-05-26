import { GraphQLError } from 'graphql'
import { pubsub } from '../../config/socketConfig'
import UserModel from '../../models/user.model'
import NotificationModel from '../../models/notification.modal'

export const sendNotification = async (
   type: string,
   sender: unknown,
   receiver: unknown,
   postId?: unknown,
   commentId?: unknown
) => {
   try {
      if (sender.toString() === receiver.toString()) return
      const notificationReq: any = {
         sender,
         receiver,
         post: postId,
         comment: commentId,
         type,
      }
      Object.keys(notificationReq).forEach(
         (key) => notificationReq[key] === undefined && delete notificationReq[key]
      )
      const notification = await NotificationModel.create(notificationReq)
      const findNotification = await NotificationModel.findOne(notificationReq)
         .populate('sender')
         .populate('post')
      await UserModel.findByIdAndUpdate(receiver, { $push: { notifications: notification._id } })
      await pubsub.publish('NEW_NOTIFICATION', {
         newNotification: {
            _id: findNotification?._id,
            type: findNotification?.type,
            sender: findNotification?.sender,
            receiver: findNotification?.receiver,
            post: findNotification?.post,
            createdAt: findNotification?.createdAt,
            isSeen: findNotification?.isSeen,
            isRemoved: findNotification?.isRemoved,
         },
      })
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}

export const removeNotification = async (
   type: string,
   sender: unknown,
   receiver: unknown,
   postId?: unknown,
   commentId?: unknown
) => {
   try {
      let notificationObj: any = { sender, receiver, post: postId, comment: commentId, type }
      Object.keys(notificationObj).forEach(
         (key) => notificationObj[key] === undefined && delete notificationObj[key]
      )
      const findNotification = await NotificationModel.findOne(notificationObj)
         .populate('sender')
         .populate('post')
      if (!findNotification) return
      // @ts-ignore
      const notification: any = { ...findNotification._doc, isRemoved: true }
      if (findNotification) {
         await findNotification.deleteOne()
         await UserModel.findByIdAndUpdate(receiver, { $pull: { notifications: findNotification._id } })
      }
      await pubsub.publish('NEW_NOTIFICATION', {
         newNotification: {
            ...notification,
         },
      })
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}

export const markAllNotificationsSeen = async (parent: any, args: any, { user, error }: any) => {
   try {
      if (error) throw new GraphQLError(error)
      await NotificationModel.updateMany(
         {
            receiver: user._id,
            isSeen: false,
         },
         {
            $set: {
               isSeen: true,
            },
         }
      )
      return true
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}
