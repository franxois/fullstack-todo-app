import { gql } from "apollo-server";

export default gql`
  enum PriorityLevel {
    LOW
    MEDIUM
    HIGH
  }

  type Todo {
    id: ID!
    created_at: Float! # Used to store bigint
    message: String!
    priority: PriorityLevel!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    todoAdd(message: String!, priority: PriorityLevel!): Todo!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
