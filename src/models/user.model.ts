import jwt from 'jsonwebtoken'
import { UserDocument } from 'mongoose.gen'
import { Model, Schema, model } from 'mongoose'
import { comparePassword, hashPassword } from '../utils/passwordUtils'

const userSchema: Schema<UserDocument> = new Schema<UserDocument>({
   name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
      index: true,
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
   isGoogleUser: {
      type: Boolean,
      default: false,
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

userSchema.methods.comparePassword = async function (candidatePassword: string) {
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
      process.env.JWT_SECRET
   )
   return token
}

const UserModel: Model<UserDocument> = model('User', userSchema)

UserModel.createIndexes({ unique: true })

export default UserModel
