import React, { useReducer } from "react";
import { Provider, createClient } from "urql";
import "./App.scss";
import { useGet_All_TodosQuery } from "./generated/graphql";

const GRAPHQL_BACKEND_URL = "http://localhost:4000/graphql";

const client = createClient({
  url: GRAPHQL_BACKEND_URL,
});

const Main: React.FC = () => {
  type Action = { type: "message"; message: string } | { type: "clear" };
  type State = { message: string };
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "message":
        return { ...state, message: action.message };
      case "clear":
        return { ...state, message: "" };
    }
  };

  // Local state
  let [state, dispatch] = useReducer(reducer, {
    message: "",
  });

  const [todos, refreshTodos] = useGet_All_TodosQuery();

  return (
    <main>
      <input
        value={state.message}
        onChange={({ target }) =>
          dispatch({ type: "message", message: target.value })
        }
      ></input>
      <button>Add</button>
      <ul>
        {todos.data?.todos.map((t) => (
          <li>{t.message}</li>
        ))}
      </ul>
    </main>
  );
};

function App() {
  return (
    <Provider value={client}>
      <Main />
    </Provider>
  );
}

export default App;
