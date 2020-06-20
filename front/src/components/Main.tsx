import React, { useReducer } from "react";
import {
  useGet_All_TodosQuery,
  useTodoAddMutation,
  PriorityLevel,
} from "../graphql/generated";

const Main: React.FC = () => {
  type Action =
    | { type: "message"; message: string }
    | { type: "priority"; priority: PriorityLevel }
    | { type: "clear" };
  type State = { message: string; priority: PriorityLevel };
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "message":
        return { ...state, message: action.message };
      case "priority":
        return { ...state, priority: action.priority };
      case "clear":
        return { ...state, message: "" };
    }
  };

  // Local state
  let [state, dispatch] = useReducer(reducer, {
    message: "",
    priority: PriorityLevel.Low,
  });

  const [todos, refreshTodo] = useGet_All_TodosQuery();
  const [newTodo, addTodo] = useTodoAddMutation();

  return (
    <main>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addTodo({ message: state.message, priority: state.priority });
          dispatch({ type: "clear" });
          refreshTodo();
        }}
      >
        <label>
          Todo
          <input
            value={state.message}
            onChange={({ target }) =>
              dispatch({ type: "message", message: target.value })
            }
          ></input>
        </label>
        <label>
          Priority
          <select
            value={state.priority}
            onChange={({ target }) => {
              dispatch({
                type: "priority",
                priority: target.value as PriorityLevel,
              });
            }}
          >
            {[PriorityLevel.Low, PriorityLevel.Medium, PriorityLevel.High].map(
              (p) => (
                <option value={p}>{p}</option>
              )
            )}
          </select>
        </label>
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
