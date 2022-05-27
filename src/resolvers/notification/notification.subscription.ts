import { pubsub } from '../../config/socketConfig'
import { GraphQLError } from 'graphql'
import { withFilter } from 'graphql-subscriptions'
import { SubscriptionResolvers } from '../../types/types.generated'

const mongodb = require('mongodb')

export const notificationSubscription: SubscriptionResolvers = {
   newNotification: {
      subscribe: async (_, args: any, { user, error }) => {
         if (error) throw new GraphQLError(error.message)
         const asyncIterator = () => pubsub.asyncIterator(['NEW_NOTIFICATION'])
         const filterFn = (payload: any): any => {
            return payload.newNotification.receiver == user._id
         }
         return withFilter(asyncIterator, filterFn)() as any
      },
   },
}
