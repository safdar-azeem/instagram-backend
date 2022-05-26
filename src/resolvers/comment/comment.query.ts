import { GraphQLError } from 'graphql'
import CommentModel from '../../models/comment.model'
import { QueryResolvers } from '../../types/types.generated'

export const CommentQueries: QueryResolvers = {
   getComments: async (parent, { comments }, { user, error }) => {
      if (error) throw new GraphQLError(error)

      const comment = await CommentModel.find({
         _id: {
            $in: comments,
         },
      })
         .populate('user')
         .populate('post')
         .sort({ createdAt: -1 })

      return comment as any
   },
}
