import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    username: String
    email: String
    description: String
    createdAt: String
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
    ): String!
  }
`;
