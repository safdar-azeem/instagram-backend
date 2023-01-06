import PostTypes from '../types/post.type'

const postSchema = `#graphql
${PostTypes}

type Query {
   getAllPosts: [Post]!
   getPostById(postId: ID!): Post!
   getPostsByUser(userId: ID!): [Post]!
   getBookmarkedPosts: [Post]!
   explorePosts(skip: Int, limit: Int): [Post]!
}

type Mutation {
   uploadPhoto(file: Upload!): String!
   createPost(content: String, photo: String, isPublic: Boolean): Post!
   deletePost(postId: ID!): Boolean!
   likePost(postId: ID!): Boolean!
   bookmarkPost(postId: ID!): Boolean!
   
}
`

export default postSchema
