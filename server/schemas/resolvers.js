const { Book, User } = require("../models");

const resolvers = {
  Query: {
    book: async () => {
      return await Book.find({});
    },
    user: async () => {
      return await User.find({});
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    createUser: async (parent, args) => {
      const user = await user.create(args);
      return user;
    },
  },
};

module.exports = resolvers;
