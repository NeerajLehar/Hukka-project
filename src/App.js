import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "././pages/login/Login";
import { AdminPanel } from "./pages/adminPanel/AdminPanel";
import ProtRoutes from "./ProtRoutes";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtRoutes />}>
          <Route path="/*" element={<AdminPanel />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
