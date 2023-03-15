import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
const onchangeHandler = jest.fn();

test("renders button correctly", () => {
  render(
    <Button
      onChangeHandler={onchangeHandler}
      type="button"
      labelText="this is button"
    />
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
test("button should trigger onlick function correctly", () => {
  render(
    <Button
      onChangeHandler={onchangeHandler}
      type="button"
      labelText="this is button"
    />
  );
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(onchangeHandler).toBeCalledTimes(1);
});
