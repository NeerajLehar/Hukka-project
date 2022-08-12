import React from "react";
import Nav from "../../componets/navbar/Nav";
import style from "./projects.module.scss";
import SideContainer from "../../componets/SideContainer/SideContainer";
import DropDownCard from "../../componets/dropDownCard/DropDownCard";
import DropDown from "../../componets/dropDown/DropDown";
import AddWorker from "../../componets/addWorker/AddWorker";

function Projects() {
  return (
    <>
      <Nav />
      <div className={style.projectMainContainer}>
        <div className={style.headerContainer}>
          <h1>Project Management</h1>
          <div className={style.headerButton}>
            <div className={style.addCompany}> add new company</div>
            <div className={style.filter}> filter</div>
          </div>
        </div>
        <DropDownCard />
        <DropDownCard />
        <DropDown />
        <AddWorker />
      </div>
    </>
  );
}

export default Projects;
