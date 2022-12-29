import { PostMutations, PostQueries } from './post'
import { UserMutations, UserQueries } from './user'
import UploadMutation from './upload'

const resolvers = {
   Query: {
      ...UserQueries,
      ...PostQueries,
   },
   Mutation: {
      ...UserMutations,
      ...PostMutations,
      ...UploadMutation,
   },
}

export default resolvers
