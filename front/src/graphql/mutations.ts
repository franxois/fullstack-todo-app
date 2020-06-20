import gql from "graphql-tag";

export const add_todo = gql`
  mutation todoAdd($message: String!, $priority: PriorityLevel!) {
    todoAdd(message: $message, priority: $priority) {
      id
    }
  }
`;
