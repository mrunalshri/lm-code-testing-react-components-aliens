import { render, screen } from "@testing-library/react";
import TextAreaInput from "./TextAreaInput";
const onchangeHandler = jest.fn();
test("renders text area element correctly", () => {
  render(
    <TextAreaInput
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
