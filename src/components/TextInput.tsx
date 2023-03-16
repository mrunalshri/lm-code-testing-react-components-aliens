import React, { useState } from "react";
import validations from "../validation";
import ErrorMessage from "./ErrorMessage";

interface TextInputProps {
  labelText: string;
  name: string;
  value: string;
  validationType: string;
  onChangeHandler: (key: string, value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
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
      <label>{props.labelText}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={({ target }) => {
          validate(target.value, props.validationType);
          props.onChangeHandler(props.name, target.value);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default TextInput;
