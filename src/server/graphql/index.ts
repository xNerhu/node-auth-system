import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './types';
import resolvers from './resolvers';

export const applyApollo = (app: Application) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path: '/api' });
};
