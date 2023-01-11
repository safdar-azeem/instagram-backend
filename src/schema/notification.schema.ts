import NotificationTypes from '../types/notification.type'

const notificationSchema = `#graphql
${NotificationTypes}

type Query {
    getNotifications: [notification!]!
    countUnSeenNotifications: Int!
}

type Mutation {
    markAllNotificationsSeen: Boolean!
}

type Subscription {
    newNotification: notification!
}
`

export default notificationSchema
