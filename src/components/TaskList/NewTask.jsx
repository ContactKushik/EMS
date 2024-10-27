import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-red-400 rounded-xl h-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 rounded px-3 py-1">{task.category}</h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm MT-2">{task.taskDescription}</p>
      <div className="mt-4">
        <button className="text-sm py-1 px-2 rounded-md bg-green-500">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask