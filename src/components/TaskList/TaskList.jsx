import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';
const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div className="py-5 mt-10 h-[55%] w-full  flex items-center justify-start flex-nowrap flex-shrink-0 gap-5 overflow-x-auto no-scrollbar scroll-smooth">
      {data.tasks.map((elem,i)=>{
        // console.log(elem);
        
        if(elem.active){
          return <AcceptTask key={i} task={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={i} task={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={i} task={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={i} task={elem}/>
        }
      })}
      
      
    </div>
  );
}

export default TaskList