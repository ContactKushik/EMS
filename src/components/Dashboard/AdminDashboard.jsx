import React from "react";
import Header from "../Other/Headers";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({data,changeUser}) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} data={data} />
      <div className="flex gap-2 w-full flex-wrap">
        <CreateTask />
        <AllTask data={data}/>
      </div>
    </div>
  );
};

export default AdminDashboard;
