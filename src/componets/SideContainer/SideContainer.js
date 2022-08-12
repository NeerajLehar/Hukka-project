import React from "react";
import style from "./sideContainer.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const SideContainer = (props) => {
  // const [children] = props;
  return <div className={`${style.sideContainer}`}>{props.children}</div>;
};

export default SideContainer;
