const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedDonations: [Donation]
  }

  type Donation {
    _id: ID
    charityName: String
    description: String
    charityId: String
    image: String
    link: String
  }

  input DonationInput {
    charityName: String
    description: String
    charityId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveDonation(data: DonationInput): User

    removeDonation(charityId: ID): User
  }
`;

module.exports = typeDefs;

// # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data