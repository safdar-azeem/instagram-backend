# Instagram Backend

This is a Backend for an Instagram-like application, built using TypeScript, GraphQL, MongoDB, and other modern technologies. It provides all the essential functionalities you would expect from a social media platform, including posting, liking, commenting, real-time notifications, following other users, updating user information, and more.

## Features

-  **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
-  **Post Management**: Create, read, update, and delete posts.
-  **Likes and Comments**: Users can like and comment on posts.
-  **Following and Followers**: Users can follow and unfollow other users.
-  **Real-time Notifications**: Receive notifications for likes, comments, and new followers in real-time using GraphQL subscriptions.
-  **User Profile**: Update user profile information, including bio, profile picture, and more.
-  **Image Upload**: Upload images to Cloudinary, a cloud-based image and video management service.
-  **Continuous Integration/Continuous Deployment (CI/CD)**: Automated deployment to Vercel using GitHub Actions.

## Technologies

-  **TypeScript**: A statically typed superset of JavaScript for better code quality and maintainability.
-  **GraphQL**: A modern API query language for efficient data fetching and real-time updates.
-  **MongoDB**: A popular NoSQL database for storing and retrieving data.
-  **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
-  **GraphQL Code Generator**: A tool for generating TypeScript types and resolvers from GraphQL schemas.
-  **Mongoose Types Generator**: A tool for generating TypeScript types from Mongoose models.
-  **Apollo Server**: A production-ready GraphQL server implementation.
-  **Express.js**: A fast and minimalist web application framework for Node.js.
-  **JSON Web Tokens (JWT)**: A compact and self-contained way for securely transmitting information between parties as a JSON object.
-  **Cloudinary**: A cloud-based image management service for storing and optimizing media assets.

## Getting Started

1. Clone the repository
2. Install dependencies
3. Set up environment variables: MONGODB_URI, SECRET_KEY, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
4. Generate TypeScript types for Mongoose models: `yarn mtgen`
5. Generate TypeScript types and resolvers for GraphQL: `yarn generate`
6. Start the development server: `yarn dev`

## Client

https://github.com/safdar-azeem/instagram-frontend