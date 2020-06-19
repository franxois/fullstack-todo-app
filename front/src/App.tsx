import React from "react";
import { Provider, createClient } from "urql";
import Main from "./components/Main";
import "./App.scss";

const GRAPHQL_BACKEND_URL = "http://localhost:4000/graphql";

const client = createClient({
  url: GRAPHQL_BACKEND_URL,
});

function App() {
  return (
    <Provider value={client}>
      <Main />
    </Provider>
  );
}

export default App;
