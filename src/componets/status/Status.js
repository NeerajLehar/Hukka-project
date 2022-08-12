import React from "react";
import style from "./status.module.scss";

const Status = (props) => {
  let currentClass;
  switch (props.status.toLowerCase()) {
    case "active":
      currentClass = style.active;
      break;
    case "pending":
      currentClass = style.pending;
      break;
    case "completed":
      currentClass = style.completed;
      break;
    default:
      currentClass = style.nothing;
  }
  console.log(props);
  return <div className={`${currentClass}`}>{props.children}</div>;
};

export default Status;
