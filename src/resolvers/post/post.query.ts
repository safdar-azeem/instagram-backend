import { GraphQLError } from 'graphql'
import PostModel from '../../models/post.modal'
import { QueryResolvers } from '../../types/types.generated'

export const PostQueries: QueryResolvers = {
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
         return posts as any
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   getPostById: async (_, { postId }, { error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId).populate('user')
         if (!post) throw new GraphQLError('Post not found')
         return post as any
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
         return posts as any[]
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
         return posts as any[]
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   explorePosts: async (_, { limit }) => {
      try {
         const posts = await PostModel.aggregate([
            { $sample: { size: limit } },
            {
               $lookup: {
                  from: 'users',
                  localField: 'user',
                  foreignField: '_id',
                  as: 'user',
               },
            },
            { $unwind: '$user' },
         ])
         return posts as any[]
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
