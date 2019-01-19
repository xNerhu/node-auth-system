import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    firstName: String
    lastName: String
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
    test(text: String!): String!
  }
`;
