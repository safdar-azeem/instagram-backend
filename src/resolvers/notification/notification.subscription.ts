import { GraphQLError } from 'graphql'
import { pubsub } from '../../index'
import { withFilter } from 'graphql-subscriptions'
const mongodb = require('mongodb')

const notificationSubscription = {
   newNotification: {
      subscribe: (_, args: any, { user, error }) => {
         if (error) throw new GraphQLError(error.message)
         const asyncIterator = () => pubsub.asyncIterator(['NEW_NOTIFICATION'])
         const filterFn = (payload): any => {
            const userId = mongodb.ObjectId(user._id)
            return payload.newNotification.receiver.equals(userId)
         }
         return withFilter(asyncIterator, filterFn)()
      },
   },
}

export default notificationSubscription
