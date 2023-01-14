const NotificationTypes = `#graphql

type Notification {
   _id: ID!
   type: String!
   sender: User!
   receiver: User!
   post: Post
   createdAt: Date!
   isSeen: Boolean!    
   isRemoved: Boolean!
}
`
export default NotificationTypes
