import { Document, model, ObjectId, Schema } from 'mongoose'
import { User } from './user.model'
import { Post } from './post.modal'

export interface Comment extends Document {
   content: string
   user: User | string
   post: Post | string
   createdAt: Date
   likes: Array<User | string>
}

const CommentSchema = new Schema({
   content: {
      type: String,
      trim: true,
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
   },
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post id is required'],
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   likes: [
      {
         type: Schema.Types.ObjectId,
         ref: 'User',
      },
   ],
})

const CommentModel = model<Comment>('Comment', CommentSchema)

export default CommentModel
