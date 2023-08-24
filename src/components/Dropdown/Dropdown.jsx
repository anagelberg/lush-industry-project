import React, { useState } from "react";
import "./Dropdown.scss";
import arrowdown from "../../assets/icons/down-light.svg";

const Dropdown = ({ title, items }) => {
  /* Note for elise -- chatGpt did this */
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemChange = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={toggleDropdown}>
        {title}
        <img className="dropdown__arrow" src={arrowdown} alt="arrow down" />
      </div>
      <div
        className={`dropdown__content ${
          isOpen ? "dropdown__content--open" : ""
        }`}
      >
        {items.map((item) => (
          <div key={item} className="dropdown__item">
            <input
              type="checkbox"
              id={`checkbox-${item}`}
              checked={selectedItems[item] || false}
              onChange={() => handleItemChange(item)}
            />
            <label htmlFor={`checkbox-${item}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
