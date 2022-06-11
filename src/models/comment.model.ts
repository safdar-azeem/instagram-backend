import { Model, model, Schema } from 'mongoose'
import { CommentDocument } from 'mongoose.gen'

const CommentSchema: Schema<CommentDocument> = new Schema<CommentDocument>({
   content: {
      type: String,
      trim: true,
   },
   user: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: [true, 'User is required'],
   },
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post id is required'],
   },
   postUser: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Post user id is required'],
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

const CommentModel: Model<CommentDocument> = model('Comment', CommentSchema)

export default CommentModel
