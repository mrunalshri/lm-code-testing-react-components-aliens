import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

test("renders ErrorMessage correctly", () => {
  render(<ErrorMessage errorMessage="this is an error" />);
  const errorComponent = screen.getByText("this is an error");
  expect(errorComponent).toBeInTheDocument();
});
test("not renders if no errormessage correctly", () => {
  render(<ErrorMessage errorMessage="" />);
  const errorComponent = screen.queryByText("this is an error");
  expect(errorComponent).not.toBeInTheDocument();
});
