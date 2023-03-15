import React from "react";

interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return <div className="error">{errorMessage}</div>;
};

export default ErrorMessage;
