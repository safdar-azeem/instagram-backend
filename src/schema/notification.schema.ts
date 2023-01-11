import NotificationTypes from '../types/notification.type'

const notificationSchema = `#graphql
${NotificationTypes}

type Query {
    getNotifications: [notification!]!
    countUnSeenNotifications : Int!
}

type Mutation {
    markAsRead(id: ID!): notification!
    markAsSeen(id: ID!): notification!
}

type Subscription {
    newNotification: notification!
}
`

export default notificationSchema
