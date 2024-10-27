import React from 'react'
import Headers from '../Other/Headers'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard({data,changeUser}) {
  // console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Headers changeUser={changeUser} data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard