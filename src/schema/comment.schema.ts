import CommentTypes from '../types/comment.type'

const commentSchema = `#graphql
${CommentTypes}

type Query {
      getComments(postId: ID!): [Comment!]!
}

type Mutation {
      createComment(content: String!, postId: ID!): Comment!
      deleteComment(commentId: ID!): Comment!
      likeComment(commentId: ID!): Comment!
}
`

export default commentSchema
