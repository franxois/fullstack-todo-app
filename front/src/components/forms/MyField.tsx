import React from "react";
import { FieldInputProps, Field, FieldProps } from "formik";
import { LabelWrapper } from "./LableWrapper";

interface MyFieldProps {
  name: string;
  label: string;
  children: (props: { id: string } & FieldInputProps<any>) => JSX.Element;
}

export const MyField: React.FC<MyFieldProps> = ({ name, label, children }) => {
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => (
        <div>
          <LabelWrapper label={label} htmlFor={name}>
            {children({ id: name, ...field })}
          </LabelWrapper>
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};
