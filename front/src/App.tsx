import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Main from "./components/Main";
import "./App.scss";

const GRAPHQL_BACKEND_URL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: GRAPHQL_BACKEND_URL,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
