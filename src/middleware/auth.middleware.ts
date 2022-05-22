import jwt from 'jsonwebtoken'
import { GraphQLError } from 'graphql'
import UserModel from '../models/user.model'
import { UserDocument } from 'mongoose.gen'

interface AuthResult {
   user: UserDocument | null
   error: GraphQLError | null
}

const authMiddleware = async (tokenValue: string | undefined): Promise<AuthResult> => {
   const token = tokenValue ? tokenValue.replace('Bearer ', '') : null
   if (!token) {
      return {
         user: null,
         error: new GraphQLError('Authentication token must be provided in the Authorization header'),
      }
   }

   try {
      const { _id } = jwt.verify(token, process.env.JWT_SECRET) as { _id: string }
      if (!_id) {
         return {
            user: null,
            error: new GraphQLError('Invalid/Expired token'),
         }
      }
      const user = await UserModel.findById(_id)
      if (!user) {
         return {
            user: null,
            error: new GraphQLError('User not found'),
         }
      }
      return { user, error: null }
   } catch (error) {
      return {
         user: null,
         error: new GraphQLError('Invalid token format or secret'),
      }
   }
}

export default authMiddleware
