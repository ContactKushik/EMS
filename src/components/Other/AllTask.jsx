import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  // console.log(employees);

  return (
    <div className=" bg-[#1C1C1C] p-5 mt-5 w-[55%] rounded-lg overflow-auto">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium  text-center">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-center">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-center">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 text-center">Failed</h5>
      </div>
      <div className="">
        {employees.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-zinc-600 mb-2 py-1 px-4 flex justify-between rounded  bg-[#111111]"
            >
              <h2 className="text-md font-medium w-1/5 ">{elem.name}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400 text-center">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400 text-center">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white text-center">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600 text-center">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
