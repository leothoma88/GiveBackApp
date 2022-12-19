const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Nonprofit {
    id: ID!
    name: String
    primarySlug: String
    ein: String
    isDisbursable: Boolean
    description: String
    descriptionLong: String
    locationAddress: String
    nteeCode: String
    nteeCodeMeaning: NteeCodeMeaning
    logoCloudinaryId: ID
    coverImageCloudinaryId: ID
    logoUrl: String
    coverImageUrl: String
    profileUrl: String
  }
  type NteeCodeMeaning {
    majorCode: String
    majorMeaning: String
    decileCode: String
    decileMeaning: String
  }

  type NonprofitTags {
    id: ID!
    tagName: String
    causeCategory: String
    title: String
    tagImageCloudinaryId: String
    tagUrl: String
    tagImageUrl: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedDonations: [Nonprofit]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    charity: Nonprofit
    search(searchTerm: String!): [Nonprofit]
  }

  input DonationInput {
    name: String
    description: String
    coverImageUrl: String
    ein: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeDonation(ein: ID): User
    saveDonation(newDonation: DonationInput!): User
  }
`;

module.exports = typeDefs;

// # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
