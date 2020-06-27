import React from "react";

export const LabelWrapper: React.FC<{ label: string; htmlFor: string }> = ({
  label,
  htmlFor,
  children,
}) => (
  <label htmlFor={htmlFor}>
    {label}
    {children}
  </label>
);
