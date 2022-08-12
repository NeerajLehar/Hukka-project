import React from "react";
import { Sidebar } from "../../componets/sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import "./adminPanel.scss";
import Invoicing from "../invoicing/Invoicing";
import { Routes, Route } from "react-router-dom";
import Projects from "../projects/Projects";
import Workers from "../workers/Workers";
import SideContainer from "../../componets/SideContainer/SideContainer";

export const AdminPanel = () => {
  return (
    <div className="mainContainer">
      <Sidebar></Sidebar>
      <SideContainer>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/invoicing" element={<Invoicing />} />
          <Route path="/workers" element={<Workers />} />
        </Routes>
      </SideContainer>
    </div>
  );
};
export default AdminPanel;
