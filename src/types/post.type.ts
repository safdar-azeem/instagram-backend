const PostTypes = `#graphql
type Post {
   _id: ID!
   content: String
   photo: String
   user: User
   createdAt: Date
   likes: [ID]
   comments: [ID]
   isPublic: Boolean
}
`
export default PostTypes
