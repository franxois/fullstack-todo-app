import React, { useReducer } from "react";
import {
  useGet_All_TodosQuery,
  useTodoAddMutation,
} from "../graphql/generated";

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

  const [todos] = useGet_All_TodosQuery();
  const [newTodo, addTodo] = useTodoAddMutation();

  return (
    <main>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addTodo({ message: state.message });
          dispatch({ type: "clear" });
        }}
      >
        <input
          value={state.message}
          onChange={({ target }) =>
            dispatch({ type: "message", message: target.value })
          }
        ></input>
        {newTodo.error && (
          <span className="error">{newTodo.error.message}</span>
        )}
        <input type="submit" value="Add" />
      </form>
      <ul>
        {todos.data?.todos.map((t) => (
          <li>{t.message}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
