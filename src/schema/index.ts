import UserSchema from './user.schema'
import postSchema from './post.schema'
import commentSchema from './comment.schema'
import notificationSchema from './notification.schema'

const typeDefs = `#graphql
   
   scalar Upload
   scalar Date

   ${UserSchema}
   ${postSchema}
   ${commentSchema}
   ${notificationSchema}
`

export default typeDefs
