import React from "react";

interface ButtonProps {
  labelText: string;
  type: "submit" | "button";
  onChangeHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onChangeHandler,
  type,
  labelText,
}) => {
  return (
    <div>
      <button type={type} onClick={onChangeHandler}>
        {labelText}
      </button>
    </div>
  );
};

export default Button;
