import React, { useState } from "react";
import style from "./dashboard.module.scss";
import { Datepicker } from "../../componets/datepicker/Datepicker";
import ProgressCircle from "../../componets/progressCircle/ProgressCircle";
import TaskList from "../../componets/taskList/TaskList";
import Nav from "../../componets/navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [currentDate, updateDate] = useState(new Date());
  console.log(`this is working in parent ${currentDate}`);
  return (
    <>
      <div className={style.dashboardContainer}>
        <Nav />
        <div className={style.mainContainer}>
          <div className={`${style.taskContainer} `}>
            <div className={`${style.calender} p-3`}>
              <Datepicker currentDate={currentDate} selectDate={updateDate} />
            </div>
            <div className={`${style.taskListContainer} p-3`}>
              <TaskList currentDate={currentDate} />
            </div>
          </div>
          <div className={style.progressContainer}>
            <ProgressCircle />
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
