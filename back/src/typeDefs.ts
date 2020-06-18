import { gql } from "apollo-server";

export default gql`
  type Todo {
    id: ID!
    created_at: Float! # Used to store bigint
    message: String!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    todoAdd(message: String!): Todo!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
