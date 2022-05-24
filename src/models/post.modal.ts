import { model, Schema, Model } from 'mongoose'
import { PostDocument } from 'mongoose.gen'

const postSchema: Schema<PostDocument> = new Schema<PostDocument>({
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

const PostModel: Model<PostDocument> = model('Post', postSchema)

export default PostModel
