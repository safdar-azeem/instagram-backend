import { Document, model, Schema } from 'mongoose'
import { User } from './user.model'
import { Comment } from './comment.model'

export interface Post extends Document {
   content: string
   photo: string
   user: User | string
   createdAt: Date
   likes: Array<User | string>
   comments: Array<Comment | string>
   isPublic: boolean
}

const postSchema = new Schema({
   content: {
      type: String,
      trim: true,
      default: '',
   },
   photo: {
      type: String,
      default: null,
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
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
   comments: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Comment',
      },
   ],
   isPublic: {
      type: Boolean,
      default: true,
   },
})

const PostModel = model<Post>('Post', postSchema)

export default PostModel
