import { Document, model, Schema } from 'mongoose'

export interface Comment extends Document {
   content: string
   user: string
   post: string
   createdAt: Date
   likes: string[]
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
