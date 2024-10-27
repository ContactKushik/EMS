import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-red-400 rounded-xl h-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 rounded px-3 py-1">{task.category}</h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm MT-2">
        {task.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-green-500 rounded">Complete</button>
      </div>
    </div>
  );
}

export default CompleteTask