import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./App.css";
import { AuthContext } from "./context/AuthProvider";

import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(
  //   authData.employees.find((e) => {
  //     email == e.email && password == e.password;
  //   })
  // );

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      setUser("user");
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
