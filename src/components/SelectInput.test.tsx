import { fireEvent, render, screen } from "@testing-library/react";
import SelectInput from "./SelectInput";
const onchangeHandler = jest.fn();

test("renders select element correctly", () => {
  render(
    <SelectInput
      name="select-name"
      validationType="validateQuestion"
      value=""
      onChangeHandler={onchangeHandler}
      labelText="this is selectBox"
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  const labelSelectElement = screen.getByText(/this is selectBox/i);
  expect(labelSelectElement).toBeInTheDocument();
  expect(selectInputElement).toBeInTheDocument();
});
test("renders select element value correctly when passed through props", () => {
  render(
    <SelectInput
      value="Not 4"
      validationType="validateQuestion"
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  expect(selectInputElement).toHaveValue("Not 4");
});

test("renders select element value correctly", () => {
  render(
    <SelectInput
      validationType="validateQuestion"
      value=""
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "4" } });
  expect(selectInputElement).toHaveValue("4");
});

test("should renders error message if incorrect value selected for What is 2 + 2:", () => {
  render(
    <SelectInput
      validationType="validateQuestion"
      value=""
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "Not 4" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).toBeInTheDocument();
});

test("should not renders error message if correct value selected for What is 2 + 2", () => {
  render(
    <SelectInput
      validationType="validateQuestion"
      value=""
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "4" } });
  const errorComponent = screen.queryByText("Invalid Input!");
  expect(errorComponent).not.toBeInTheDocument();
});
