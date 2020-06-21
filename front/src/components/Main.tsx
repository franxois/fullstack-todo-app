import React, { useReducer } from "react";
import {
  useAllTodosQuery,
  useCreateTodoMutation,
  PriorityLevel,
} from "../graphql/generated";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc";

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

  const { data: todos, refetch: refreshTodo } = useAllTodosQuery();
  const [addTodo, { error: errorNewTodo }] = useCreateTodoMutation();

  const PriorityIcon: React.FC<{ level?: PriorityLevel | null }> = ({
    level,
  }) => {
    switch (level) {
      case PriorityLevel.High:
        return <FcHighPriority />;
      case PriorityLevel.Medium:
        return <FcMediumPriority />;
      default:
        return <FcLowPriority />;
    }
  };

  return (
    <main>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addTodo({
            variables: { message: state.message, priority: state.priority },
          });
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
                <option value={p} key={p}>
                  {p}
                </option>
              )
            )}
          </select>
        </label>
        {errorNewTodo && <span className="error">{errorNewTodo.message}</span>}
        <input type="submit" value="Add" />
      </form>
      <ul>
        {todos?.allTodos?.nodes.map(
          (t) =>
            t && (
              <li key={t.id}>
                {t.message} <PriorityIcon level={t.priority} /> {t.createdAt}
              </li>
            )
        )}
      </ul>
    </main>
  );
};

export default Main;
