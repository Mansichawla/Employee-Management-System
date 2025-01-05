import React, { useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./App.css";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
const App = () => {
  const [user, setUser] = useState();

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      // console.log("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("user");
      // console.log("user");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
