import React from "react";
import CreateTask from "../Others/createTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-sreen w-full p-7 ">
      <h1 className="text-3xl font-medium">Good Morning, Mansi!</h1>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
