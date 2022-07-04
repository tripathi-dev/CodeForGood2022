import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TeamLogin from "../Pages/TeamLogin";
import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/AdminDashboard";
import TeamRegistration from "../Pages/Team_Registration";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-login" element={<TeamLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminDashboard />} />
        <Route path="/team-registration" element={<TeamRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
