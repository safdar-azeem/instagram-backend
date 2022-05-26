import { PostQueries } from './post/post.query'
import { UserQueries } from './user/user.query'
import { PostMutations } from './post/post.mutation'
import { AuthMutations } from './auth/auth.mutation'
import { UserMutations } from './user/user.mutation'
import { CommentQueries } from './comment/comment.query'
import { UploadMutation } from './upload/upload.mutation'
import { CommentMutations } from './comment/comment.mutation'
import { notificationQueries } from './notification/notification.query'
import { notificationSubscription } from './notification/notification.subscription'
import { markAllNotificationsSeen } from './notification/notification.mutation'
import { Resolvers } from '../types/types.generated'

const resolvers: Resolvers = {
   Query: {
      ...UserQueries,
      ...PostQueries,
      ...CommentQueries,
      ...notificationQueries,
   },
   Mutation: {
      ...UserMutations,
      ...PostMutations,
      ...UploadMutation,
      ...CommentMutations,
      ...AuthMutations,
      markAllNotificationsSeen,
   },
   Subscription: {
      ...notificationSubscription,
   },
}

export default resolvers
