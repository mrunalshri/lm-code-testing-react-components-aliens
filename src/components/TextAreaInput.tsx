import React, { useState } from "react";
import validations from "../validation";
import ErrorMessage from "./ErrorMessage";

interface TextAreaInputProps {
  labelText: string;
  name: string;
  onChangeHandler: (key: string, value: string) => void;
  value: string;
  validationType: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
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
      <textarea
        onChange={({ target }) => {
          validate(target.value, props.validationType);
          props.onChangeHandler(props.name, target.value);
        }}
        name={props.name}
        value={props.value}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default TextAreaInput;
