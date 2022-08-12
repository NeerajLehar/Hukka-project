import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
// import ChevronDown from "../svgs/chevron-down";
import styles from "./dropdown.module.scss";

const DropDown = ({
  options = [
    { id: 1, label: "Metal", value: "metal" },
    { id: 2, label: "Agricultural", value: "agricultural" },
    { id: 3, label: "Constructions", value: "constructions" },
  ],
  value,
  onChange,
  placeholder = "Select",
  className = "",
}) => {
  const selectedItem = options.find((option) => option.value === value);
  const lable = selectedItem?.label ?? placeholder;
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      className={styles.dropDownBtn}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      nothing
    </button>
  ));

  return (
    <Dropdown className={styles.dropdownContainer}>
      <Dropdown.Toggle as={CustomToggle}>{lable}</Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdownMenuContainer + " " + className}>
        {options.map((option, index) => (
          <Dropdown.Item
            className={styles.dropdownMenuItem}
            key={index}
            onClick={() => onChange(option.value)}
          >
            <span className="text-uppercase">{option.label}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
