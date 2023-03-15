import React from "react";

interface ButtonProps {
  labelText: string;
  type: "submit" | "button";
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        type={props.type}
        onClick={() => {
          console.log("hiii");
        }}
      >
        {props.labelText}
      </button>
    </div>
  );
};

export default Button;
