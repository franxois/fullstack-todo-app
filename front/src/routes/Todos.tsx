import React from "react";
import {
  useAllTodosQuery,
  useSetTodoDoneMutation,
  useInsertTodoMutation,
} from "../graphql/generated";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
  FcCheckmark,
} from "react-icons/fc";
import { Formik, Form } from "formik";
import "./Main.scss";
import { MyField } from "../components/forms/MyField";

type TodoFormValues = {
  message: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
};

const PriorityIcon: React.FC<{
  level?: string | null;
}> = ({ level }) => {
  switch (level) {
    case "HIGH":
      return <FcHighPriority />;
    case "MEDIUM":
      return <FcMediumPriority />;
    default:
      return <FcLowPriority />;
  }
};

export const Todos: React.FC = () => {
  const { data: todos, refetch: refreshTodo } = useAllTodosQuery();
  const [addTodo, { error: errorNewTodo }] = useInsertTodoMutation();
  const [setTodoDone, { error: errorSetTotoDone }] = useSetTodoDoneMutation();

  const GraphQLErrors = () => (
    <div>
      {[errorNewTodo, errorSetTotoDone].map(
        (e) =>
          e && (
            <span className="error" key={e.message}>
              {e.message}
            </span>
          )
      )}
    </div>
  );

  const TodoList = () => (
    <ul className="todoList">
      {todos?.todos_connection?.edges.map(({ node }) => {
        if (node) {
          if (node.done) {
            return (
              <li key={node.todo_id}>
                <FcCheckmark /> {node.message}
              </li>
            );
          } else {
            return (
              <li
                key={node.todo_id}
                onClick={async () => {
                  console.log(node);
                  await setTodoDone({ variables: { _eq: node.todo_id } });
                }}
                className="doable"
              >
                <PriorityIcon level={node.priority} /> {node.message} ( since{" "}
                {new Date(node.created_at).toLocaleString()})
              </li>
            );
          }
        }
      })}
    </ul>
  );

  return (
    <>
      <Formik<TodoFormValues>
        initialValues={{
          message: "",
          priority: "LOW",
        }}
        onSubmit={async (values, formikHelper) => {
          try {
            await addTodo({ variables: { ...values } });
            refreshTodo();
            formikHelper.resetForm();
          } catch (e) {
            // error is in errorNewTodo
          }
        }}
      >
        {(props) => (
          <Form>
            <MyField name="message" label="Todo">
              {(props) => (
                <input placeholder="what are you up to?" {...props}></input>
              )}
            </MyField>

            <MyField label="Priority" name="priority">
              {(props) => (
                <select {...props}>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              )}
            </MyField>

            <input type="submit" value="Add" disabled={props.isSubmitting} />
            <GraphQLErrors />
          </Form>
        )}
      </Formik>
      <TodoList />
    </>
  );
};
