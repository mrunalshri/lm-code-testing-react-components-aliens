import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
const onchangeHandler = jest.fn();
test("renders input element correctly", () => {
  render(
    <TextInput
      value=""
      validationType="validateNumberOfBeings"
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
      validationType="validateNumberOfBeings"
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
      value="test"
      validationType="validateNumberOfBeings"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "test" } });
  expect(textInputElement).toHaveValue("test");
});

test("should renders error message if input has incorrect value for Species", () => {
  render(
    <TextInput
      value=""
      validationType="validateSpeciesName"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "123" } });
  const errorComponent = screen.getByText("Invalid Input!");
  expect(errorComponent).toBeInTheDocument();
});
test("should not renders error message if input has correct value for Species", () => {
  render(
    <TextInput
      value=""
      validationType="validateSpeciesName"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "testing" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).not.toBeInTheDocument();
});

test("should renders error message if input has incorrect value for Planet", () => {
  render(
    <TextInput
      value=""
      validationType="validatePlanetName"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "123$" } });
  const errorComponent = screen.getByText("Invalid Input!");
  expect(errorComponent).toBeInTheDocument();
});
test("should not renders error message if input has correct value for Planet", () => {
  render(
    <TextInput
      value=""
      validationType="validatePlanetName"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "testing" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).not.toBeInTheDocument();
});

test("should renders error message if input has incorrect value for Number Of Beings", () => {
  render(
    <TextInput
      value=""
      validationType="validateNumberOfBeings"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "123$" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).toBeInTheDocument();
});

test("should not renders error message if input has correct value for Number Of Beings", () => {
  render(
    <TextInput
      value=""
      validationType="validateNumberOfBeings"
      onChangeHandler={onchangeHandler}
      name="test"
      labelText="this is textbox"
    />
  );
  const textInputElement = screen.getByRole("textbox");
  fireEvent.change(textInputElement, { target: { value: "1000000000" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).not.toBeInTheDocument();
});
