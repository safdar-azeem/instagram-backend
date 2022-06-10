import mongoose from 'mongoose'

const connectToMongoDB = async (): Promise<void> => {
  const db: string | undefined = process.env.MONGODB_URI

  try {
    mongoose.set('strictQuery', false)
    if (db) {
      await mongoose.connect(db, {
        autoIndex: true,
      })
      console.log('MongoDB connected...')
    } else {
      throw new Error('MongoDB URI not found.')
    }
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectToMongoDB
