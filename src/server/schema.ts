import { gql } from 'apollo-server-express';

export default gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    emailVerified: Boolean!
    description: String
    createdAt: String!
  }

  type Query {
    users: [User]
    me: String!
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      description: String
    ): User!
  }
`;
