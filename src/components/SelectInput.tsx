import React, { useState } from "react";

interface SelectInputProps {
  labelText: string;
  name: string;
  value: string;
  onChangeHandler: (key: string, value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  return (
    <div>
      <label>{props.labelText} </label>
      <span>
        <select
          name={props.name}
          aria-label="select-options"
          value={props.value}
          className="select-Input"
          onChange={({ target }) =>
            props.onChangeHandler(props.name, target.value)
          }
        >
          <option value={"4"}>4</option>
          <option value={"Not 4"}>Not 4</option>
        </select>
      </span>
    </div>
  );
};

export default SelectInput;
