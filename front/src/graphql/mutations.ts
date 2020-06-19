import gql from "graphql-tag";

export const add_todo = gql`
  mutation todoAdd($message: String!) {
    todoAdd(message: $message) {
      id
    }
  }
`;
