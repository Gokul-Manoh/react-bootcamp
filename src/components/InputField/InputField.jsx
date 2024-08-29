import React from "react";
import "./InputField.css";

export const InputField = ({
  type,
  label,
  value,
  onChange,
  required = true,
  errorMsg = "",
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
      />
      <p className="error-message">{errorMsg}</p>
    </>
  );
};
