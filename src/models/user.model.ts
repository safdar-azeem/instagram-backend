import jwt from 'jsonwebtoken'
import { Document, model, Schema } from 'mongoose'
import { comparePassword, hashPassword } from '../utils/passwordUtils'
import { Post } from './post.modal'
import { Notification } from './notification.modal'

export interface User extends Document {
   name: string
   email: string
   password: string
   avatar: string
   location: string
   website: string
   profession: string
   cover: string
   bio: string
   dateOfBirth: Date
   createdAt: Date
   following: Array<User | string>
   followers: Array<User | string>
   totalNotifications: number
   totalMessages: number
   isVerified: boolean
   posts: Array<Post | string>
   bookmarks: Array<Post | string>
   notifications: Array<Notification | string>
   comparePassword: (candidatePassword: string) => Promise<boolean>
   generateAuthToken: () => string
}

const userSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name is required'],
      trim: (value: string) => value.trim(),
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      trim: (value: string) => value.trim(),
      unique: [true, 'Email already exist'],
      validate: {
         validator: function (value: string) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
               throw new Error('Email is not valid')
            }
         },
      },
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      maxlength: 20,
      validate: {
         validator: function (value: string) {
            if (value.length < 6) {
               throw new Error('Password must be at least 6 characters long')
            }
         },
      },
   },
   avatar: {
      type: String,
      default: null,
   },
   location: {
      type: String,
      default: null,
   },
   website: {
      type: String,
      default: null,
   },
   profession: {
      type: String,
      default: null,
   },
   cover: {
      type: String,
      default: null,
   },
   bio: {
      type: String,
      default: null,
   },
   dateOfBirth: {
      type: Date,
      default: null,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   following: [
      {
         type: Schema.Types.ObjectId,
         ref: 'User',
      },
   ],
   followers: [
      {
         type: Schema.Types.ObjectId,
         ref: 'User',
      },
   ],
   totalNotifications: {
      type: Number,
      default: 0,
   },
   totalMessages: {
      type: Number,
      default: 0,
   },
   isVerified: {
      type: Boolean,
      default: false,
   },
   posts: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Post',
      },
   ],
   bookmarks: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Post',
      },
   ],
   notifications: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Notification',
      },
   ],
})

userSchema.pre('save', async function (next) {
   try {
      if (this.isModified('password')) {
         this.password = await hashPassword(this.password)
      }
      next()
   } catch (err) {
      next(err)
   }
})

userSchema.methods.comparePassword = async function (candidatePassword) {
   try {
      const isMatch = await comparePassword(candidatePassword, this.password)
      return isMatch
   } catch (err) {
      throw new Error(err)
   }
}

userSchema.methods.generateAuthToken = function () {
   const token = jwt.sign(
      {
         _id: this._id,
      },
      process.env.SECRET_KEY
   )
   return token
}

const UserModel = model<User>('User', userSchema)

export default UserModel
