import React from "react";
import {
  useAllTodosQuery,
  useCreateTodoMutation,
  useSetTodoDoneMutation,
  PriorityLevel,
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
  priority: PriorityLevel;
};

const PriorityIcon: React.FC<{
  level?: PriorityLevel | null;
}> = ({ level }) => {
  switch (level) {
    case PriorityLevel.High:
      return <FcHighPriority />;
    case PriorityLevel.Medium:
      return <FcMediumPriority />;
    default:
      return <FcLowPriority />;
  }
};

export const Todos: React.FC = () => {
  const { data: todos, refetch: refreshTodo } = useAllTodosQuery();
  const [addTodo, { error: errorNewTodo }] = useCreateTodoMutation();
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
      {todos?.allTodos?.nodes.map((t) => {
        if (t) {
          if (t.done) {
            return (
              <li key={t.id}>
                <FcCheckmark /> {t.message}
              </li>
            );
          } else {
            return (
              <li
                key={t.id}
                onClick={async () => {
                  await setTodoDone({ variables: { id: t.id } });
                }}
                className="doable"
              >
                <PriorityIcon level={t.priority} /> {t.message} ( since{" "}
                {new Date(t.createdAt).toLocaleString()})
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
          priority: PriorityLevel.Low,
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
                  <option value={PriorityLevel.Low}>Low</option>
                  <option value={PriorityLevel.Medium}>Medium</option>
                  <option value={PriorityLevel.High}>High</option>
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
