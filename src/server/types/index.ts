import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    hello: String!
    test: [Int!]!
  }

  type Mutation {
    test(text: String!): String!
  }
`;
