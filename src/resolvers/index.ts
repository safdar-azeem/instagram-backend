import { PostMutations, PostQueries } from './post'
import { UserMutations, UserQueries } from './user'
import UploadMutation from './upload'
import { CommentMutations, CommentQueries } from './comment'

const resolvers = {
   Query: {
      ...UserQueries,
      ...PostQueries,
      ...CommentQueries,
   },
   Mutation: {
      ...UserMutations,
      ...PostMutations,
      ...UploadMutation,
      ...CommentMutations,
   },
}

export default resolvers
