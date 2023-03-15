import React, { useState } from "react";

interface TextAreaInputProps {
  labelText: string;
  name: string;
  onChangeHandler: (key: string, value: string) => void;
  value: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  return (
    <div>
      <label>{props.labelText}</label>
      <textarea
        onChange={({ target }) =>
          props.onChangeHandler(props.name, target.value)
        }
        name={props.name}
        value={props.value}
      />
    </div>
  );
};

export default TextAreaInput;
