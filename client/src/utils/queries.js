import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_SEARCH = gql`
  query search($searchTerm: String!) {
    search(searchTerm: $searchTerm) {
      name
      description
      coverImageUrl
      ein
    }
  }
`;
