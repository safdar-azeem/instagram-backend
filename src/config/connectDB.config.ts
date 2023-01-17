import mongoose from 'mongoose'

const db = process.env.MONGODB_URI

const connectToMongoDB = async (): Promise<void> => {
   try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(db)
      console.log('MongoDB connected...')
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

export default connectToMongoDB
