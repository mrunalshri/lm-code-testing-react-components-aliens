import React, { useState } from "react";
import validations from "../validation";
import ErrorMessage from "./ErrorMessage";

interface SelectInputProps {
  labelText: string;
  name: string;
  value: string;
  validationType: string;
  onChangeHandler: (key: string, value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validate: (value: string, validationType: string) => void = (
    value,
    validationType
  ) => {
    const isValidInput: boolean =
      validations[validationType as keyof typeof validations](value);
    if (!isValidInput) {
      setErrorMessage(`Invalid Input!`);
    } else {
      setErrorMessage(undefined);
    }
  };
  return (
    <div>
      <label>{props.labelText} </label>
      <span>
        <select
          name={props.name}
          aria-label="select-options"
          value={props.value}
          className="select-Input"
          onChange={({ target }) => {
            validate(target.value, props.validationType);
            props.onChangeHandler(props.name, target.value);
          }}
        >
          <option value={"4"}>4</option>
          <option value={"Not 4"}>Not 4</option>
        </select>
      </span>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default SelectInput;
