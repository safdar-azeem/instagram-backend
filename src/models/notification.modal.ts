import { Document, model, Schema } from 'mongoose'
import { User } from './user.model'
import { Post } from './post.modal'

export interface Notification extends Document {
   type: 'like' | 'like-comment' | 'comment' | 'follow'
   sender: User | string
   receiver: User | string
   post: Post | string
   createdAt: Date
   isSeen: boolean
}

const notificationSchema = new Schema({
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
})

const NotificationModel = model<Notification>('Notification', notificationSchema)

export default NotificationModel
