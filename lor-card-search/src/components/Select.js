import React from "react";

const Select = ({ name, description, multiple, value, options, onSelect }) => {
  return (
    <label>
      {description}
      <select name={name} multiple={multiple} value={value} onChange={onSelect}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
