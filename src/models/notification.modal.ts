import { Model, model, Schema } from 'mongoose'
import { NotificationDocument } from 'mongoose.gen'

const notificationSchema: Schema<NotificationDocument> = new Schema<NotificationDocument>({
   type: {
      type: String,
      enum: ['like', 'like-comment', 'comment', 'follow'],
      required: [true, 'Type is required'],
   },
   sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender is required'],
   },
   receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Receiver is required'],
   },
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
   },
   comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   isSeen: {
      type: Boolean,
      default: false,
   },
   isRemoved: {
      type: Boolean,
      default: false,
   },
})

const NotificationModel: Model<NotificationDocument> = model('Notification', notificationSchema)

export default NotificationModel
