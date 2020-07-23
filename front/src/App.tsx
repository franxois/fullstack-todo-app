import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Main from "./routes/Main";
import { BrowserRouter } from "react-router-dom";

const GRAPHQL_BACKEND_URL = "http://localhost:5000/v1beta1/relay";

const client = new ApolloClient({
  uri: GRAPHQL_BACKEND_URL,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
