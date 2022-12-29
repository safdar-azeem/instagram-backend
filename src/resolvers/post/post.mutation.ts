import { GraphQLError } from 'graphql'
import { PostModel, UserModel } from '../../models'

const PostMutations = {
   createPost: async (_, args, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = (await PostModel.create({
            ...args,
            user: user._id,
         })) as any
         await UserModel.findByIdAndUpdate(user._id, { $push: { posts: post._id } })
         return { ...post._doc, user }
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   likePost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         const isLiked = post.likes.find((like) => like.toString() === user._id.toString())
         if (isLiked) {
            post.likes = post.likes.filter((like) => like.toString() !== user._id.toString())
         } else {
            post.likes.push(user._id)
         }
         await post.save()
         return !isLiked
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   deletePost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         if (post.user.toString() !== user._id.toString()) throw new GraphQLError('Action not allowed')
         await post.remove()
         await UserModel.findByIdAndUpdate(user._id, { $pull: { posts: postId } })
         return true
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
   bookmarkPost: async (_, { postId }, { user, error }) => {
      if (error) throw new GraphQLError(error)
      try {
         const post = await PostModel.findById(postId)
         if (!post) throw new GraphQLError('Post not found')
         const isBookmarked = user.bookmarks.find((bookmark) => bookmark.toString() === postId.toString())
         if (isBookmarked) {
            user.bookmarks = user.bookmarks.filter((bookmark) => bookmark.toString() !== postId.toString())
         } else {
            user.bookmarks.push(postId)
         }
         await user.save({
            validateBeforeSave: false,
         })
         return !isBookmarked
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}

export default PostMutations
