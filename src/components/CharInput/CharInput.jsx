import React, { useRef, useEffect } from "react";
import "./CharInput.scss";

// Single character input component
const CharInput = ({ index, onChange, total }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // If this is the first input, focus it by default
    if (index === 0) {
      inputRef.current.focus();
    }
  }, [index]);

  const handleInputChange = (e) => {
    // Get the next input element
    const nextSibling = inputRef.current.nextSibling;

    // If there's a next input and a value is entered, focus the next input
    if (nextSibling && e.target.value) {
      nextSibling.focus();
    }

    // Call parent onChange for any other logic you might want
    onChange(e.target.value, index);
  };

  return (
    <input
      className="password-field"
      type="password"
      ref={inputRef}
      maxLength="1"
      onChange={handleInputChange}
      style={{ width: "20px", marginRight: "5px" }}
    />
  );
};

export default CharInput;
