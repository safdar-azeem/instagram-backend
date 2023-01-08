import UserTypes from '../types/user.type'

const UserSchema = `#graphql
${UserTypes}

type Query {
   me: User
   getUserById(id: ID!): User
   searchUsersByName(name: String!): [User]
}

type Mutation {
   register(name: String!, email: String!, password: String!): RegisterResponse
   login(email: String!, password: String!): AuthData
   updateProfile(
      name: String
      bio: String
      avatar: String
      location: String
      website: String
      cover: String
      profession: String
      dateOfBirth: String
   ): Boolean
   followOrUnfollowUser(userId: ID!): Boolean
   
}
`

export default UserSchema
