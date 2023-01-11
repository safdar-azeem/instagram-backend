import { GraphQLError } from 'graphql'
import { pubsub } from '../../index'

const notificationSubscription = {
   newNotification: {
      subscribe: () => {
         return pubsub.asyncIterator(['NEW_NOTIFICATION'])
      },
   },
}

export default notificationSubscription
