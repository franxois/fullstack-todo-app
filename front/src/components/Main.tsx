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
import { useFormik } from "formik";

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

  const formik = useFormik<TodoFormValues>({
    initialValues: {
      message: "",
      priority: PriorityLevel.Low,
    },
    onSubmit: async (values, formikBag) => {
      try {
        await addTodo({ variables: { ...values } });
        refreshTodo();
        formikBag.resetForm();
      } catch (e) {
        // error is in errorNewTodo
      }
    },
  });

  const Field: React.FC<{ label: string; htmlFor: string }> = ({
    label,
    htmlFor,
    children,
  }) => (
    <label htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );

  interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
  const MyInput: React.FC<MyInputProps> = (props) => <input {...props}></input>;

  return (
    <main>
      <form onSubmit={formik.handleSubmit}>
        <Field label="Todo" htmlFor="message">
          <MyInput
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder="what are you up to?"
          ></MyInput>
        </Field>

        <Field label="Priority" htmlFor="priority">
          <select
            id="priority"
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
          >
            {[PriorityLevel.Low, PriorityLevel.Medium, PriorityLevel.High].map(
              (p) => (
                <option value={p} key={p}>
                  {p}
                </option>
              )
            )}
          </select>
        </Field>
        <input type="submit" value="Add" disabled={formik.isSubmitting} />
        {errorNewTodo && <span className="error">{errorNewTodo.message}</span>}
      </form>
      <TodoList />
    </main>
  );
};

export default Main;
