import React from "react";
import "./inputfield.style.css";

const InputFIeld = ({ type, value, handleChange, placeholder }) => {
  return (
    <input
      className="inputField"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputFIeld;
