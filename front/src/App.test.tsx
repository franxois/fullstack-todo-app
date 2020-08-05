import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders "Pages"', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to "Pages"/i);
  expect(linkElement).toBeInTheDocument();
});
