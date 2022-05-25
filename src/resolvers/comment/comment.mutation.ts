import { Types } from 'mongoose'
import { GraphQLError } from 'graphql'
import PostModel from '../../models/post.modal'
import CommentModel from '../../models/comment.model'
import { CommentDocument, UserDocument } from 'mongoose.gen'
import { MutationResolvers } from '../../types/types.generated'
import { removeNotification, sendNotification } from '../notification/notification.mutation'

export const CommentMutations: MutationResolvers = {
   createComment: async (parent: any, { content, postId }, { user, error }: any) => {
      if (error) throw new GraphQLError(error)

      try {
         const post = await PostModel.findById(postId)
         if (!post) {
            throw new GraphQLError('Post not found')
         }

         const comment: any = await CommentModel.create({
            content,
            user: user._id,
            post: postId,
            postUser: post.user,
         })

         post.comments.push(comment._id)
         await post.save()

         sendNotification('comment', user._id, post.user, post._id, comment._id)

         return {
            ...comment._doc,
            user: user,
            post: post,
         }
      } catch (err) {
         throw new GraphQLError(err)
      }
   },

   likeComment: async (parent: any, { commentId }, { user, error }: any) => {
      if (error) throw new GraphQLError(error)

      try {
         const comment = await CommentModel.findById(commentId)
         if (!comment) {
            throw new GraphQLError('Comment not found')
         }

         const isLiked = comment.likes.find((id: any) => id.toString() === user._id.toString())
         if (isLiked) {
            comment.likes = comment.likes.filter(
               (id: any) => id.toString() !== user._id.toString()
            ) as Types.Array<UserDocument | Types.ObjectId>
            removeNotification('like-comment', user._id, comment.postUser, comment?.post, comment._id)
         } else {
            comment.likes.push(user._id)
            sendNotification('like-comment', user._id, comment.postUser, comment?.post, comment._id)
         }

         await comment.save()

         return !isLiked
      } catch (err) {
         throw new GraphQLError(err)
      }
   },

   deleteComment: async (parent: any, { commentId }, { user, error }: any) => {
      if (error) throw new GraphQLError(error)

      try {
         const comment = await CommentModel.findById(commentId).populate('post')
         if (!comment) {
            throw new GraphQLError('Comment not found')
         }

         const commentPostUserId = comment.post.user.toString()
         if (user._id.toString() !== comment.user.toString() && user._id.toString() !== commentPostUserId) {
            throw new GraphQLError('Action not allowed')
         }

         await comment.deleteOne()

         const post = await PostModel.findById(comment.post)
         if (!post) {
            throw new GraphQLError('Post not found')
         }

         post.comments = post.comments.filter(
            (id: any) => id.toString() !== commentId.toString()
         ) as Types.Array<CommentDocument | Types.ObjectId>
         await post.save()

         // @ts-ignore
         const commentPostId = comment.post._id.toString()
         removeNotification('comment', comment.user, post.user, commentPostId, commentId)

         return true
      } catch (err) {
         throw new GraphQLError(err)
      }
   },
}
