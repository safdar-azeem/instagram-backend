import { GraphQLError } from 'graphql'
import { PostModel } from '../../models'

const PostQueries = {
   getAllPosts: async (_, __, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const posts = await PostModel.find({
            user: {
               $in: [...user.following, user._id],
            },
            isPublic: true,
         })
            .populate('user')
            .sort({ createdAt: -1 })
         return posts
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   getPostsByUser: async (_, { userId }, { error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const posts = await PostModel.find({
            user: userId,
         })
            .populate('user')
            .sort({ createdAt: -1 })
         return posts
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   getBookmarkedPosts: async (_, __, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const posts = await PostModel.find({
            _id: {
               $in: user.bookmarks,
            },
         })
            .populate('user')
            .sort({ createdAt: -1 })
         return posts
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}

export default PostQueries
