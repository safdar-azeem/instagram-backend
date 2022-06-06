import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string | number }
   String: { input: string; output: string }
   Boolean: { input: boolean; output: boolean }
   Int: { input: number; output: number }
   Float: { input: number; output: number }
   Date: { input: any; output: any }
   JSON: { input: any; output: any }
   Upload: { input: any; output: any }
}

export type AuthData = {
   __typename?: 'AuthData'
   token: Scalars['String']['output']
}

export type Comment = {
   __typename?: 'Comment'
   _id: Scalars['ID']['output']
   content: Scalars['String']['output']
   createdAt: Scalars['Date']['output']
   likes: Array<Maybe<Scalars['ID']['output']>>
   post: Post
   user: User
}

export type GoogleAuthData = {
   __typename?: 'GoogleAuthData'
   isNewUser: Scalars['Boolean']['output']
   token: Scalars['String']['output']
}

export type Mutation = {
   __typename?: 'Mutation'
   bookmarkPost: Scalars['Boolean']['output']
   createComment: Comment
   createPost: Post
   deleteComment: Scalars['Boolean']['output']
   deletePost: Scalars['Boolean']['output']
   followOrUnfollowUser?: Maybe<Scalars['Boolean']['output']>
   googleLogin?: Maybe<GoogleAuthData>
   likeComment: Scalars['Boolean']['output']
   likePost: Scalars['Boolean']['output']
   login?: Maybe<AuthData>
   markAllNotificationsSeen: Scalars['Boolean']['output']
   register?: Maybe<RegisterResponse>
   updateProfile?: Maybe<Scalars['Boolean']['output']>
   uploadPhoto: Scalars['String']['output']
}

export type MutationBookmarkPostArgs = {
   postId: Scalars['ID']['input']
}

export type MutationCreateCommentArgs = {
   content: Scalars['String']['input']
   postId: Scalars['ID']['input']
}

export type MutationCreatePostArgs = {
   content?: InputMaybe<Scalars['String']['input']>
   isPublic?: InputMaybe<Scalars['Boolean']['input']>
   photo?: InputMaybe<Scalars['String']['input']>
}

export type MutationDeleteCommentArgs = {
   commentId: Scalars['ID']['input']
}

export type MutationDeletePostArgs = {
   postId: Scalars['ID']['input']
}

export type MutationFollowOrUnfollowUserArgs = {
   userId: Scalars['ID']['input']
}

export type MutationGoogleLoginArgs = {
   token: Scalars['String']['input']
}

export type MutationLikeCommentArgs = {
   commentId: Scalars['ID']['input']
}

export type MutationLikePostArgs = {
   postId: Scalars['ID']['input']
}

export type MutationLoginArgs = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type MutationRegisterArgs = {
   email: Scalars['String']['input']
   name: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type MutationUpdateProfileArgs = {
   avatar?: InputMaybe<Scalars['String']['input']>
   bio?: InputMaybe<Scalars['String']['input']>
   cover?: InputMaybe<Scalars['String']['input']>
   dateOfBirth?: InputMaybe<Scalars['String']['input']>
   location?: InputMaybe<Scalars['String']['input']>
   name?: InputMaybe<Scalars['String']['input']>
   profession?: InputMaybe<Scalars['String']['input']>
   website?: InputMaybe<Scalars['String']['input']>
}

export type MutationUploadPhotoArgs = {
   file: Scalars['Upload']['input']
}

export type Notification = {
   __typename?: 'Notification'
   _id: Scalars['ID']['output']
   createdAt: Scalars['Date']['output']
   isRemoved: Scalars['Boolean']['output']
   isSeen: Scalars['Boolean']['output']
   post?: Maybe<Post>
   receiver: User
   sender: User
   type: Scalars['String']['output']
}

export type Post = {
   __typename?: 'Post'
   _id: Scalars['ID']['output']
   comments?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   content?: Maybe<Scalars['String']['output']>
   createdAt?: Maybe<Scalars['Date']['output']>
   isPublic?: Maybe<Scalars['Boolean']['output']>
   likes?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   photo?: Maybe<Scalars['String']['output']>
   user?: Maybe<User>
}

export type Query = {
   __typename?: 'Query'
   countUnSeenNotifications: Scalars['Int']['output']
   explorePosts: Array<Maybe<Post>>
   getAllPosts: Array<Maybe<Post>>
   getBookmarkedPosts: Array<Maybe<Post>>
   getComments: Array<Comment>
   getNotifications: Array<Notification>
   getPostById: Post
   getPostsByUser: Array<Maybe<Post>>
   getUserById?: Maybe<User>
   me?: Maybe<User>
   searchUsersByName?: Maybe<Array<Maybe<User>>>
}

export type QueryExplorePostsArgs = {
   limit?: InputMaybe<Scalars['Int']['input']>
}

export type QueryGetCommentsArgs = {
   comments: Array<Scalars['ID']['input']>
}

export type QueryGetPostByIdArgs = {
   postId: Scalars['ID']['input']
}

export type QueryGetPostsByUserArgs = {
   userId: Scalars['ID']['input']
}

export type QueryGetUserByIdArgs = {
   id: Scalars['ID']['input']
}

export type QuerySearchUsersByNameArgs = {
   name: Scalars['String']['input']
}

export type RegisterInput = {
   email: Scalars['String']['input']
   name: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type RegisterResponse = {
   __typename?: 'RegisterResponse'
   message: Scalars['String']['output']
}

export type Subscription = {
   __typename?: 'Subscription'
   newNotification: Notification
}

export type User = {
   __typename?: 'User'
   _id: Scalars['ID']['output']
   avatar?: Maybe<Scalars['String']['output']>
   bio?: Maybe<Scalars['String']['output']>
   bookmarks?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   cover?: Maybe<Scalars['String']['output']>
   createdAt?: Maybe<Scalars['Date']['output']>
   dateOfBirth?: Maybe<Scalars['Date']['output']>
   followers?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   following?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   isVerified?: Maybe<Scalars['Boolean']['output']>
   location?: Maybe<Scalars['String']['output']>
   name: Scalars['String']['output']
   notifications?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   posts?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
   profession?: Maybe<Scalars['String']['output']>
   totalMessages?: Maybe<Scalars['Int']['output']>
   totalNotifications?: Maybe<Scalars['Int']['output']>
   website?: Maybe<Scalars['String']['output']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
   resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
   | ResolverFn<TResult, TParent, TContext, TArgs>
   | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
   subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
   resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
   subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
   resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
   | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
   | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
   | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
   | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
   parent: TParent,
   context: TContext,
   info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
   obj: T,
   context: TContext,
   info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
   next: NextResolverFn<TResult>,
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
   AuthData: ResolverTypeWrapper<AuthData>
   String: ResolverTypeWrapper<Scalars['String']['output']>
   Comment: ResolverTypeWrapper<Comment>
   ID: ResolverTypeWrapper<Scalars['ID']['output']>
   Date: ResolverTypeWrapper<Scalars['Date']['output']>
   GoogleAuthData: ResolverTypeWrapper<GoogleAuthData>
   Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
   JSON: ResolverTypeWrapper<Scalars['JSON']['output']>
   Mutation: ResolverTypeWrapper<{}>
   Notification: ResolverTypeWrapper<Notification>
   Post: ResolverTypeWrapper<Post>
   Query: ResolverTypeWrapper<{}>
   Int: ResolverTypeWrapper<Scalars['Int']['output']>
   RegisterInput: RegisterInput
   RegisterResponse: ResolverTypeWrapper<RegisterResponse>
   Subscription: ResolverTypeWrapper<{}>
   Upload: ResolverTypeWrapper<Scalars['Upload']['output']>
   User: ResolverTypeWrapper<User>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
   AuthData: AuthData
   String: Scalars['String']['output']
   Comment: Comment
   ID: Scalars['ID']['output']
   Date: Scalars['Date']['output']
   GoogleAuthData: GoogleAuthData
   Boolean: Scalars['Boolean']['output']
   JSON: Scalars['JSON']['output']
   Mutation: {}
   Notification: Notification
   Post: Post
   Query: {}
   Int: Scalars['Int']['output']
   RegisterInput: RegisterInput
   RegisterResponse: RegisterResponse
   Subscription: {}
   Upload: Scalars['Upload']['output']
   User: User
}

export type AuthDataResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['AuthData'] = ResolversParentTypes['AuthData'],
> = {
   token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
   _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
   content?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
   likes?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>
   post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>
   user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
   name: 'Date'
}

export type GoogleAuthDataResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['GoogleAuthData'] = ResolversParentTypes['GoogleAuthData'],
> = {
   isNewUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
   token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
   name: 'JSON'
}

export type MutationResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
   bookmarkPost?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationBookmarkPostArgs, 'postId'>
   >
   createComment?: Resolver<
      ResolversTypes['Comment'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateCommentArgs, 'content' | 'postId'>
   >
   createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, Partial<MutationCreatePostArgs>>
   deleteComment?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteCommentArgs, 'commentId'>
   >
   deletePost?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeletePostArgs, 'postId'>
   >
   followOrUnfollowUser?: Resolver<
      Maybe<ResolversTypes['Boolean']>,
      ParentType,
      ContextType,
      RequireFields<MutationFollowOrUnfollowUserArgs, 'userId'>
   >
   googleLogin?: Resolver<
      Maybe<ResolversTypes['GoogleAuthData']>,
      ParentType,
      ContextType,
      RequireFields<MutationGoogleLoginArgs, 'token'>
   >
   likeComment?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationLikeCommentArgs, 'commentId'>
   >
   likePost?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationLikePostArgs, 'postId'>
   >
   login?: Resolver<
      Maybe<ResolversTypes['AuthData']>,
      ParentType,
      ContextType,
      RequireFields<MutationLoginArgs, 'email' | 'password'>
   >
   markAllNotificationsSeen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
   register?: Resolver<
      Maybe<ResolversTypes['RegisterResponse']>,
      ParentType,
      ContextType,
      RequireFields<MutationRegisterArgs, 'email' | 'name' | 'password'>
   >
   updateProfile?: Resolver<
      Maybe<ResolversTypes['Boolean']>,
      ParentType,
      ContextType,
      Partial<MutationUpdateProfileArgs>
   >
   uploadPhoto?: Resolver<
      ResolversTypes['String'],
      ParentType,
      ContextType,
      RequireFields<MutationUploadPhotoArgs, 'file'>
   >
}

export type NotificationResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification'],
> = {
   _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
   createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
   isRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
   isSeen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
   post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>
   receiver?: Resolver<ResolversTypes['User'], ParentType, ContextType>
   sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>
   type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PostResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post'],
> = {
   _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
   comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
   isPublic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
   likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
   countUnSeenNotifications?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
   explorePosts?: Resolver<
      Array<Maybe<ResolversTypes['Post']>>,
      ParentType,
      ContextType,
      Partial<QueryExplorePostsArgs>
   >
   getAllPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>
   getBookmarkedPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>
   getComments?: Resolver<
      Array<ResolversTypes['Comment']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetCommentsArgs, 'comments'>
   >
   getNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType>
   getPostById?: Resolver<
      ResolversTypes['Post'],
      ParentType,
      ContextType,
      RequireFields<QueryGetPostByIdArgs, 'postId'>
   >
   getPostsByUser?: Resolver<
      Array<Maybe<ResolversTypes['Post']>>,
      ParentType,
      ContextType,
      RequireFields<QueryGetPostsByUserArgs, 'userId'>
   >
   getUserById?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetUserByIdArgs, 'id'>
   >
   me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
   searchUsersByName?: Resolver<
      Maybe<Array<Maybe<ResolversTypes['User']>>>,
      ParentType,
      ContextType,
      RequireFields<QuerySearchUsersByNameArgs, 'name'>
   >
}

export type RegisterResponseResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse'],
> = {
   message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SubscriptionResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
   newNotification?: SubscriptionResolver<
      ResolversTypes['Notification'],
      'newNotification',
      ParentType,
      ContextType
   >
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
   name: 'Upload'
}

export type UserResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
   _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
   avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   bookmarks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   cover?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
   dateOfBirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
   followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   following?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
   location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
   profession?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   totalMessages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
   totalNotifications?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
   website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
   AuthData?: AuthDataResolvers<ContextType>
   Comment?: CommentResolvers<ContextType>
   Date?: GraphQLScalarType
   GoogleAuthData?: GoogleAuthDataResolvers<ContextType>
   JSON?: GraphQLScalarType
   Mutation?: MutationResolvers<ContextType>
   Notification?: NotificationResolvers<ContextType>
   Post?: PostResolvers<ContextType>
   Query?: QueryResolvers<ContextType>
   RegisterResponse?: RegisterResponseResolvers<ContextType>
   Subscription?: SubscriptionResolvers<ContextType>
   Upload?: GraphQLScalarType
   User?: UserResolvers<ContextType>
}
