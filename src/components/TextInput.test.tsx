import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
const onchangeHandler = jest.fn();
test("renders input element correctly", () => {
  render(
    <TextInput
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  const labelInputElement = screen.getByText(/this is textbox/i);
  expect(labelInputElement).toBeInTheDocument();
  expect(textInputElement).toBeInTheDocument();
});

test("renders input element value correctly when passed through props", () => {
  render(
    <TextInput
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
      value="abcd"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  expect(textInputElement).toHaveValue("abcd");
});

test("renders input element value correctly", () => {
  render(
    <TextInput
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "123" } });
  expect(textInputElement).toHaveValue("123");
});
