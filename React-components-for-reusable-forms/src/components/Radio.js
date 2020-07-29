import React from 'react';

const Radio = ({ options, value, setValue, title, ...props }) => {
  return (
    <>
      <p>{title}: </p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;