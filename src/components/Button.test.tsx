import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders input element correctly", () => {
  render(<Button type="button" labelText="this is button" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
