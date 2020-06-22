import React from "react";
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
import { Formik, Form, Field } from "formik";

const Main: React.FC = () => {
  const { data: todos, refetch: refreshTodo } = useAllTodosQuery();
  const [addTodo, { error: errorNewTodo }] = useCreateTodoMutation();

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

  // const Fields = [
  //   { name: "message", type: "MyInput" },
  //   {
  //     name: "priority",
  //     type: "MySelect",
  //     options: [
  //       { label: "LOW", value: PriorityLevel.Low },
  //       { label: "MEDIUM", value: PriorityLevel.Medium },
  //       { label: "HIGH", value: PriorityLevel.High },
  //     ],
  //   },
  // ];

  // interface MySelectProps
  //   extends React.SelectHTMLAttributes<HTMLSelectElement> {
  //   options: { label: string; value: any }[];
  // }
  // const MySelect: React.FC<MySelectProps> = ({ options, ...props }) => (
  //   <select {...props}>
  //     {options.map((o) => (
  //       <option value={o.value} key={o.label}>
  //         {o.label}
  //       </option>
  //     ))}
  //   </select>
  // );

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
            {errorNewTodo && (
              <span className="error">{errorNewTodo.message}</span>
            )}
          </Form>
        )}
      </Formik>
      <TodoList />
    </main>
  );
};

export default Main;
