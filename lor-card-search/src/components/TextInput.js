import React from "react";

const TextInput = ({ name, description, value, onChange }) => {
  return (
    <label>
      {description}
      <input name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default TextInput;
