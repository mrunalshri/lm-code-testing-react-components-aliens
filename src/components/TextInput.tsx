import React, { useState } from "react";

interface TextInputProps {
  labelText: string;
  name: string;
  value?: string;
  onChangeHandler: (key: string, value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div>
      <label>{props.labelText}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={({ target }) =>
          props.onChangeHandler(props.name, target.value)
        }
      />
    </div>
  );
};

export default TextInput;
