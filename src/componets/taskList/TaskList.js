import React from "react";
import style from "./taskList.module.scss";
export default function TaskList() {
  return (
    <>
      <div className={style.taskContainer}>
        <div className={style.headingContainer}>
          <div className={style.header}>
            <h4>Task List</h4>
          </div>
          <div className={style.dateContainer}>date</div>
        </div>
        <div className={style.taskList}>
          <div className={style.listItem}>list item</div>
          <div className={style.listItem}>list item</div>
          <div className={style.listItem}>list item</div>
        </div>
      </div>
    </>
  );
}
