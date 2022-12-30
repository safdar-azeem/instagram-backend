import { GraphQLError } from 'graphql'
import { CommentModel } from '../../models'

const CommentQueries = {
   getComments: async (parent: any, args: any, { user, error }: any) => {
      const { comments } = args
      if (error) throw new GraphQLError(error)

      const comment = await CommentModel.find({
         _id: {
            $in: comments,
         },
      })
         .populate('user')
         .populate('post')
         .sort({ createdAt: -1 })

      return comment
   },
}

export default CommentQueries
