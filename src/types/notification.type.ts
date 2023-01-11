const NotificationTypes = `#graphql

type notification {
   _id: ID!
   type: String!
   sender: User!
   receiver: User!
   post: Post
   createdAt: Date!
   isSeen: Boolean!    
}
`
export default NotificationTypes
