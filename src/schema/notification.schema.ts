import NotificationTypes from '../types/notification.type'

const notificationSchema = `#graphql
${NotificationTypes}

type Query {
    getNotifications: [Notification!]!
    countUnSeenNotifications: Int!
}

type Mutation {
    markAllNotificationsSeen: Boolean!
}

type Subscription {
    newNotification:Notification!
}
`

export default notificationSchema
