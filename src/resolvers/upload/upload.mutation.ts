import { GraphQLError } from 'graphql'
const cloudinary = require('cloudinary/lib/v2')
import { MutationResolvers } from '../../types/types.generated'

export const UploadMutation: MutationResolvers = {
   uploadPhoto: async (_, { file }, { error }) => {
      if (error) throw new GraphQLError(error)
      try {
         cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
         })

         const response = await file
         const { createReadStream } = await response.file
         const stream = createReadStream()

         const uploadPromise = new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
               {
                  folder: 'instagram-clone',
               },
               (error: any, result: unknown) => {
                  if (result) {
                     resolve(result)
                  } else {
                     reject(error)
                  }
               }
            )
            stream.pipe(uploadStream)
         })
         const result: any = await uploadPromise
         return result.secure_url
      } catch (err) {
         throw new GraphQLError(err.message)
      }
   },
}
