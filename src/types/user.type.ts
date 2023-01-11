const UserTypes = `#graphql
type AuthData {
   token: String!
}

type RegisterResponse {
   message: String!
}

input RegisterInput {
   name: String!
   email: String!
   password: String!
}

type User {
   _id: ID!
   name: String!
   avatar: String
   location: String
   website: String
   cover: String
   bio: String
   dateOfBirth: Date
   createdAt: Date
   followers: [ID]
   following: [ID]
   posts: [ID]
   totalNotifications: Int
   totalMessages: Int
   isVerified: Boolean
   profession: String
   bookmarks: [ID]
   notifications: [ID]
}
`

export default UserTypes
