import React, { useState } from "react";
import Button from "../../componets/button/button";
import style from "./dropDownCard.module.scss";

const DropDownCard = () => {
  let [open, setVal] = useState(false);
  const toggle = () => setVal(!open);
  console.log(open);
  return (
    <div className={style.DropDownWrapper}>
      <div className={style.projectContainer}>
        <div className={style.wrapperContainer}>
          <div className={style.title}>Company</div>
          <div className={style.companyName}>company name</div>
        </div>
        <div className={style.wrapperContainer}>
          <div className={style.title}>Project</div>
          <div className={style.projectName}>project</div>
        </div>
        <div className={style.wrapperContainer}>
          <div className={style.title}> task</div>
          <div className={style.taskName}> task</div>
        </div>
        <div className={style.wrapperContainer}>
          <div className={style.title}> task hours</div>
          <div className={style.hour}> 546515</div>
        </div>
        <div className={style.wrapperContainer}>
          <div className={style.title}> start</div>
          <div className={style.startTime}> 15254</div>
        </div>
        <div className={style.wrapperContainer}>
          <div className={style.title}> finished</div>
          <div className={style.finishedTime}>date</div>
        </div>
        <div className={style.wrapperContainer}>
          <Button variant="whiteBtn">Invoice Details </Button>
        </div>
        <div className={style.menuIcon} onClick={toggle}>
          icon
        </div>
      </div>
      <div className={`${style.ExtendContainer} ${open && style.open}`}>
        <div className={style.projectContainer}>
          <div className={style.wrapperContainer}>
            <div className={style.title}>Company</div>
            <div className={style.companyName}>company name</div>
          </div>
          <div className={style.wrapperContainer}>
            <div className={style.title}>Project</div>
            <div className={style.projectName}>project</div>
          </div>
          <div className={style.wrapperContainer}>
            <div className={style.title}> task</div>
            <div className={style.taskName}> task</div>
          </div>
          <div className={style.wrapperContainer}>
            <div className={style.title}> task hours</div>
            <div className={style.hour}> 546515</div>
          </div>
          <div className={style.wrapperContainer}>
            <div className={style.title}> start</div>
            <div className={style.startTime}> 15254</div>
          </div>
          <div className={style.wrapperContainer}>
            <div className={style.title}> finished</div>
            <div className={style.finishedTime}>date</div>
          </div>
          <div className={style.wrapperContainer}>
            <Button variant="whiteBtn">Invoice Details </Button>
          </div>
          <div className={style.menuIcon} onClick={toggle}>
            icon
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownCard;
