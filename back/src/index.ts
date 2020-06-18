import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import { QueryResolvers, MutationResolvers, Todo } from "./generated/graphql";
import pool from "./db";

const Query: QueryResolvers = {
  todos: async () => {
    const res = await pool.query(`SELECT * FROM todos`);
    return res.rows;
  },
};

const Mutation: MutationResolvers = {
  todoAdd: async (_, { message }): Promise<Todo> => {
    const res = await pool.query(
      `INSERT INTO todos(message)
        VALUES ($1::text)
        RETURNING id, message, extract(epoch from created_at) as created_at`,
      [message]
    );

    return res.rows[0];
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
