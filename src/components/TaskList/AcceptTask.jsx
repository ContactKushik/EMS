import React from 'react'

const AcceptTask = ({task}) => {
  console.log(task);
  return (
    <div className="flex-shrink-0 w-[300px] bg-red-400 rounded-xl h-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 rounded px-3 py-1">{task.category}</h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-md MT-2">
        {task.taskDescription}
      </p>
      <div className="flex justify-between mt-4 ">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">Mark as Failed</button>
      </div>
    </div>
  );
}

export default AcceptTask