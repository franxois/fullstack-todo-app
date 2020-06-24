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
import { Formik, Form, Field } from "formik";
import "./Main.scss";

const Main: React.FC = () => {
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

  const TodoList = () => (
    <ul className="todoList">
      {todos?.allTodos?.nodes.map((t) => {
        if (t) {
          if (t.done) {
            return (
              <li key={t.id}>
                <FcCheckmark />
                {t.message}
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

  type TodoFormValues = {
    message: string;
    priority: PriorityLevel;
  };

  const LabelWrapper: React.FC<{ label: string; htmlFor: string }> = ({
    label,
    htmlFor,
    children,
  }) => (
    <label htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );

  return (
    <main>
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
            <LabelWrapper label="Todo" htmlFor="message">
              <Field
                id="message"
                name="message"
                placeholder="what are you up to?"
              ></Field>
            </LabelWrapper>
            {props.touched.message && props.errors.message && (
              <div id="feedback">{props.errors.message}</div>
            )}

            <LabelWrapper label="Priority" htmlFor="priority">
              <Field id="priority" as="select" name="priority">
                <option value={PriorityLevel.Low}>Low</option>
                <option value={PriorityLevel.Medium}>Medium</option>
                <option value={PriorityLevel.High}>High</option>
              </Field>
            </LabelWrapper>
            {props.touched.priority && props.errors.priority && (
              <div id="feedback">{props.errors.priority}</div>
            )}

            <input type="submit" value="Add" disabled={props.isSubmitting} />
            <GraphQLErrors />
          </Form>
        )}
      </Formik>
      <TodoList />
    </main>
  );
};

export default Main;
