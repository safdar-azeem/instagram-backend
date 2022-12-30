const CommentTypes = `#graphql

type Comment {
   _id: ID!
   content: String!
   user: User!
   post: Post!
   createdAt: Date!
   likes: [ID]!
}
`
export default CommentTypes
