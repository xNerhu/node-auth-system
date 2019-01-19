import hello from './hello';

export default {
  Query: {
    hello,
  },
  Mutation: {
    test: (_, { text }, context) => {
      return text;
    },
  },
};
