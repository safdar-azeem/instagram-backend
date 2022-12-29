const CommentTypes = `#graphql

type Comment {
   _id: ID!
   content: String!
   user: User!
   post: Post!
   createdAt: String!
   likes: [ID]!
}
`
export default CommentTypes
