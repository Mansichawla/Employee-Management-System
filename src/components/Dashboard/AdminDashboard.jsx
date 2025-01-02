import React from "react";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-fullp-10">
      <Header />
      <div>
        <form className="flex flex-wrap w-full bg-red-200 items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input type="text" placeholder="Make a UI Design"></input>
            </div>
            <div>
              <h3>Date</h3>
              <input type="date"></input>
            </div>
            <div>
              <h3>Assign to</h3>
              <input type="text" placeholder="employee name"></input>
            </div>
            <div>
              <h3>Category</h3>
              <input type="text" placeholder="design,dev, etc"></input>
            </div>
            <div>
              <button>Create Task</button>
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows=""></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
