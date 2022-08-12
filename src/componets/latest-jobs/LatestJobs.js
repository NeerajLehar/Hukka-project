import React from "react";
import style from "./latest.module.scss";

const LatestJobs = () => {
  return (
    <div className={style.jobContainer}>
      <div className={style.titleContainer}>Latest Jobs</div>
      <div className={style.header}>
        <div className={style.headerColumn}> heading 1</div>
        <div className={style.headerColumn}> heading 2</div>
        <div className={style.headerColumn}> heading 3</div>
        <div className={style.headerColumn}> heading 4</div>
      </div>
      <div className={style.row}>
        
      </div>
    </div>
  );
};

export default LatestJobs;
