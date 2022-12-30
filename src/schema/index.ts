import UserSchema from './user.schema'
import postSchema from './post.schema'
import commentSchema from './comment.schema'

const typeDefs = `#graphql
   
   scalar Upload
   scalar Date

   ${UserSchema}
   ${postSchema}
   ${commentSchema}
`

export default typeDefs
