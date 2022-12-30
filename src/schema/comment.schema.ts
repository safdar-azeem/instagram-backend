import CommentTypes from '../types/comment.type'

const commentSchema = `#graphql
${CommentTypes}

type Query {
      getComments(comments: [ID!]!): [Comment!]!
}

type Mutation {
      createComment(content: String!, postId: ID!): Comment!
      likeComment(commentId: ID!): Boolean!
      deleteComment(commentId: ID!): Boolean!
}
`

export default commentSchema
