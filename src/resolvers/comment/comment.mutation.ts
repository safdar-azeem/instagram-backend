import { GraphQLError } from 'graphql'
import { PostModel, UserModel, CommentModel } from '../../models'

const CommentMutations = {
   createComment: async (parent: any, args: any, { user, error }: any) => {
      const { content, postId } = args
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
         })

         post.comments.push(comment._id)
         await post.save()

         return {
            ...comment._doc,
            user: user,
            post: post,
         }
      } catch (err) {
         throw new GraphQLError(err)
      }
   },

   likeComment: async (parent: any, args: any, { user, error }: any) => {
      const { commentId } = args
      if (error) throw new GraphQLError(error)

      try {
         const comment = await CommentModel.findById(commentId)
         if (!comment) {
            throw new GraphQLError('Comment not found')
         }

         const isLiked = comment.likes.find((id: any) => id.toString() === user._id.toString())
         if (isLiked) {
            comment.likes = comment.likes.filter((id: any) => id.toString() !== user._id.toString())
         } else {
            comment.likes.push(user._id)
         }

         await comment.save()

         return !isLiked
      } catch (err) {
         throw new GraphQLError(err)
      }
   },

   deleteComment: async (parent: any, args: any, { user, error }: any) => {
      const { commentId } = args
      if (error) throw new GraphQLError(error)

      try {
         const comment = await CommentModel.findById(commentId).populate('post')
         if (!comment) {
            throw new GraphQLError('Comment not found')
         }

         if (comment.user.toString() !== user._id.toString()) {
            throw new GraphQLError('Action not allowed')
         }

         await comment.remove()

         const post = await PostModel.findById(comment.post)
         if (!post) {
            throw new GraphQLError('Post not found')
         }

         post.comments = post.comments.filter((id: any) => id.toString() !== commentId.toString())
         await post.save()

         return true
      } catch (err) {
         throw new GraphQLError(err)
      }
   },
}

export default CommentMutations
