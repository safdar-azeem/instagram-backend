import PostQueries from './post/post.query'
import PostMutations from './post/post.mutation'
import UserQueries from './user/user.query'
import UserMutations from './user/user.mutation'
import CommentQueries from './comment/comment.query'
import CommentMutations from './comment/comment.mutation'
import notificationQueries from './notification/notification.query'
import UploadMutation from './upload/upload.mutation'
import notificationSubscription from './notification/notification.subscription'
import { markAllNotificationsSeen } from './notification/notification.mutation'

const resolvers = {
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
      markAllNotificationsSeen,
   },
   Subscription: {
      ...notificationSubscription,
   },
}

export default resolvers
