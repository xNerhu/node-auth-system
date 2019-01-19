import { getUsers } from './users';

export default {
  Query: {
    users: getUsers,
    me: () => 'aha',
  },
  Mutation: {
    test: (_, { text }, context) => {
      return text;
    },
  },
};
