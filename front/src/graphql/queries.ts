import gql from "graphql-tag";

export const get_all_todos = gql`
  query get_all_todos {
    todos {
      id
      message
      created_at
    }
  }
`;
