import UserSchema from './user.schema'
import postSchema from './post.schema'

const typeDefs = `#graphql
   
   scalar Upload
   scalar Date

   ${UserSchema}
   ${postSchema}
`

export default typeDefs
