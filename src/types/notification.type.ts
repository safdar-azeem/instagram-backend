const NotificationTypes = `#graphql

type notification {
   _id: ID!
   type: String!
   sender: User!
   receiver: User!
   post: Post
   createdAt: Date!
   isRead: Boolean!
   isSeen: Boolean!    
}
`
export default NotificationTypes
