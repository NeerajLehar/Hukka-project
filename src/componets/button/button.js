import React from "react";
import style from "./button.module.scss";
const Button = (props) => {
  let currentClass;
  switch (props.variant) {
    case "saveBtn":
      currentClass = style.saveBtn;
      break;
    case "activeBtn":
      currentClass = style.activeBtn;
      break;
    case "warnBtn":
      currentClass = style.warnBtn;
      break;
    case "addBtnBlue":
      currentClass = style.addBtnBlue;
      break;
    case "addBtnOrange":
      currentClass = style.addBtnOrange;
      break;
    case "blackBtn":
      currentClass = style.blackButton;
      break;
    case "whiteBtn":
      currentClass = style.whiteBtn;
      break;
    default:
      currentClass = "";
  }
  return (
    <div>
      <button className={`${style.btn} ${currentClass}`}>
        {props.children}
      </button>
    </div>
  );
};
export default Button;
