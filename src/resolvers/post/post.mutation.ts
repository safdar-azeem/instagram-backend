import { Types } from 'mongoose'
import { GraphQLError } from 'graphql'
import { UserDocument } from 'mongoose.gen'
import UserModel from '../../models/user.model'
import PostModel from '../../models/post.modal'
import CommentModel from '../../models/comment.model'
import { MutationResolvers } from '../../types/types.generated'
import NotificationModel from '../../models/notification.modal'
import { removeNotification, sendNotification } from '../notification/notification.mutation'

export const PostMutations: MutationResolvers = {
   createPost: async (_, args, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = (await PostModel.create({
            ...args,
            user: user._id,
         })) as any
         await UserModel.findByIdAndUpdate(user._id, { $push: { posts: post._id } })
         return { ...post._doc, user }
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   likePost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         const isLiked = post.likes.find((like) => like.toString() === user._id.toString())
         if (isLiked) {
            post.likes = post.likes.filter((like) => like.toString() !== user._id.toString()) as Types.Array<
               UserDocument | Types.ObjectId
            >
            removeNotification('like', user._id, post.user, post._id)
         } else {
            post.likes.push(user._id)
            sendNotification('like', user._id, post.user, post._id)
         }
         await post.save()
         return !isLiked
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   deletePost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         if (post.user.toString() !== user._id.toString()) throw new GraphQLError('Action not allowed')
         await post.deleteOne()
         await UserModel.findByIdAndUpdate(user._id, { $pull: { posts: postId } })
         setTimeout(async () => {
            post.comments.forEach(async (commentId) => {
               await CommentModel.findById(commentId).then((comment) => comment.deleteOne())
            })

            await NotificationModel.deleteMany({
               $or: [{ post: postId }, { comment: { $in: post.comments } }],
            })
         }, 0)

         return true
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   bookmarkPost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         const isBookmarked = user.bookmarks.find(
            (bookmark: UserDocument['bookmarks']) => bookmark.toString() === postId.toString()
         )
         if (isBookmarked) {
            user.bookmarks = user.bookmarks.filter(
               (bookmark: UserDocument['bookmarks']) => bookmark.toString() !== postId.toString()
            )
         } else {
            user.bookmarks.push(postId)
         }
         await user.save({
            validateBeforeSave: false,
         })
         return !isBookmarked
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
