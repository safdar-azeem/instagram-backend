import { RedisPubSub } from 'graphql-redis-subscriptions'

const pubsub = new RedisPubSub({
   connection: {
      port: parseInt(process.env.COMPOSE_REDIS_PORT) || 6379,
      host: process.env.COMPOSE_REDIS_URL || 'redis',
      password: process.env.COMPOSE_REDIS_PASSWORD,
   },
})

export { pubsub }
