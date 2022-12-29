import { GraphQLError } from 'graphql'
import { PostModel, UserModel, CommentModel } from '../../models'

const CommentMutations = {
   createComment: async (parent: any, args: any, context: any) => {
      const { content, postId } = args
      const { user } = context

      if (!user) {
         throw new GraphQLError('Unauthorized')
      }

      const post = await PostModel.findById(postId)
      if (!post) {
         throw new GraphQLError('Post not found')
      }

      const comment = await CommentModel.create({
         content,
         user: user._id,
         post: postId,
      })

      return comment
   },
}

export default CommentMutations
