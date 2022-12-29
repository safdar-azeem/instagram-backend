import { Document, model, Schema } from 'mongoose'

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

const PostModel = model('Post', postSchema)

export default PostModel
