import { GraphQLError } from 'graphql'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model'

const authMiddleware = async ({ req }): Promise<{ user: any; error: any }> => {
   const token = req.headers.authorization
   if (!token) {
      return {
         error: new GraphQLError('Authentication token must be provided in the Authorization header'),
         user: null,
      }
   }
   const { _id } = jwt.verify(token, process.env.SECRET_KEY) as { _id: string }
   if (!_id) {
      return {
         error: new GraphQLError('Invalid/Expired token'),
         user: null,
      }
   }
   const user = await UserModel.findById(_id)
   if (!user) {
      return {
         error: new GraphQLError('User not found'),
         user: null,
      }
   }
   return { user, error: null }
}

export default authMiddleware
