import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_DONATION = gql`
  mutation saveDonation($data: DonationInput!) {
    saveDonation(newDonation: $data) {
      _id
      username
      savedDonations {
        ein
        name
        description
        coverImageUrl
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_DONATION = gql`
  mutation removeDonation($ein: ID!) {
    removeDonation(ein: $ein) {
      _id
      username
      savedDonations {
        ein
        name
        description
        coverImageUrl
      }
    }
  }
`;
