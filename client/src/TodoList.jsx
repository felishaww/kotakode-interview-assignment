import React from "react";
import Task from "./Task";


export default function TodoList({tasks, setTasks}) {

  return (
    <div>
      <ul>
        {tasks.map((item) => (
          <Task key={item.id} item={item.task} index={item.id} tasks={tasks} setTasks = {setTasks} task={item}/>
        ))}
      </ul> 
    </div>
  );
}
