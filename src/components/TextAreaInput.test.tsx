import { render, screen } from "@testing-library/react";
import TextAreaInput from "./TextAreaInput";
const onchangeHandler = jest.fn();
test("renders text area element correctly", () => {
  render(
    <TextAreaInput
      validationType="validateReasonText"
      onChangeHandler={onchangeHandler}
      name="text-area"
      value=""
      labelText="this is textArea"
    />
  );
  const textAreaInputElement = screen.getByRole("textbox");
  const labelInputElement = screen.getByText(/this is textArea/i);
  expect(labelInputElement).toBeInTheDocument();
  expect(textAreaInputElement).toBeInTheDocument();
});

test("renders text area element value correctly when passed through props", () => {
  render(
    <TextAreaInput
      validationType="validateReasonText"
      onChangeHandler={onchangeHandler}
      name="text-area"
      value="testing"
      labelText="this is textArea"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  expect(textInputElement).toHaveValue("testing");
});
