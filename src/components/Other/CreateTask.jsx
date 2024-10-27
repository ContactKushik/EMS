    import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
   

    const CreateTask = () => {
      

      const { employees, updateEmployees } = useContext(AuthContext);

      const [taskTitle, setTaskTitle] = useState("");
      const [taskDescription, setTaskDescription] = useState("");
      const [taskDate, setTaskDate] = useState("");
      const [asignTo, setAsignTo] = useState("");
      const [category, setCategory] = useState("");

      const submitHandler = (e) => {
        e.preventDefault();

        // Create a new task object
        const newTask = {
          taskTitle,
          taskDescription,
          taskDate,
          category,
          asignTo,
          active: false,
          newTask: true,
          failed: false,
          completed: false,
        };

        // Update the correct employee’s tasks and task count
        const updatedEmployees = employees.map((item) => {
          if (item.name === asignTo) {
            return {
              ...item,
              tasks: [...item.tasks, newTask],
              taskCounts: {
                ...item.taskCounts,
                newTask: item.taskCounts.newTask + 1,
              },
            };
          }
          return item;
        });

        // Update local storage with the new data
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        // Update context state
        updateEmployees(updatedEmployees);

        // Clear form fields after submission
        setTaskTitle("");
        setCategory("");
        setAsignTo("");
        setTaskDate("");
        setTaskDescription("");
      };

      

      return (
        <div>
          <form
            onSubmit={submitHandler}
            className="flex gap-20 bg-[#1C1C1C] mt-5 py-4 px-2 rounded-lg w-fit h-fit justify-center items-start flex-wrap"
          >
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-xl font-semibold">Task Title</h3>
                <input
                  value={taskTitle}
                  type="text"
                  placeholder="Make a UI design"
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="px-3 py-2 rounded-md w-64 bg-transparent border-2 border-gray-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                  type="date"
                  className="px-3 py-1 rounded-md w-64 bg-transparent border-2 border-gray-100 placeholder:text-black custom-date-input"
                />
              </div>

              <h3 className="text-lg font-semibold">Assign to</h3>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text"
                placeholder="employee name"
                className="px-3 py-1 rounded-md w-64 bg-transparent border-2 border-gray-100"
              />
              <h3 className="text-xl font-semibold">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="design, dev, etc"
                className="px-3 py-1 rounded-md w-64 bg-transparent border-2 border-gray-100"
              />
              <button className="px-3 py-2 bg-yellow-400 text-black font-semibold rounded-md mt-5">
                Create Task
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                cols="30"
                rows="5"
                className="rounded-md px-3 py-1 w-64 bg-transparent border-2 border-gray-100"
                placeholder="Job Detail"
              ></textarea>
            </div>
          </form>
        </div>
      );
    };

    export default CreateTask;
