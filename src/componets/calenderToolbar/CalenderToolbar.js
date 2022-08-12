import React, { useState } from "react";
import style from "./calenderToolbar.module.scss";

function CalenderToolbar(props) {
  const [viewState, setViewState] = useState("month");

  //  get date

  function addMonths(date, months) {
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }

    return date;
  }

  // back to prev month
  const goToBack = () => {
    if (viewState === "month") {
      props.onNavigate("prev", addMonths(props.date, -1));
    }
  };
  // for next month
  const goToNext = () => {
    if (viewState === "month") {
      props.onNavigate("next", addMonths(props.date, +1));
    }
  };

  return (
    <div className={style.ToolbarContainer}>
      <div className={style.buttonContainer}>
        <button className={`${style.btn} ${style.btnBack}`} onClick={goToBack}>
          back
        </button>
      </div>

      <div className={style.label}>
        <label htmlFor="">{props.label}</label>
      </div>

      <div className={style.buttonContainer}>
        <button className={`${style.btn} ${style.btnBack}`} onClick={goToNext}>
          next
        </button>
      </div>
    </div>
  );
}

export default CalenderToolbar;
