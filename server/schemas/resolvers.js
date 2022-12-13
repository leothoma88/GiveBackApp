const { AuthenticationError } = require("apollo-server-express");
const { User, Donation } = require("../models");
const { signToken } = require("../utils/auth");
const fetch = require("node-fetch");
const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {push 
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    charity: async () => {
      const res = await fetch(`https://partners.every.org/v0.2/nonprofit/homewardpet?apiKey=e09241525a3f961bfc6b8533dcbb38a3`);
      const data = await res.json();
      console.log({data})
      return data.data.nonprofit;
  },
    search: async (parent,{searchTerm},context)=> {
      const res = await fetch (`https://partners.every.org/v0.2/search/${searchTerm}?apiKey=e09241525a3f961bfc6b8533dcbb38a3`);
      const data = await res.json();
      console.log(data)
      if (data.nonprofit) {
        return [data.nonprofit]
      }
      return data.nonprofits;

    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    // saveDonation: async (parent, { data }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       {
    //         $addToSet: { savedDonations: data },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    // Set up mutation so a logged in user can only remove their profile and no one else's

    // Make it so a logged in user can only remove a skill from their own profile
    removeDonation: async (parent, { charityId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedDonations: charityId } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;