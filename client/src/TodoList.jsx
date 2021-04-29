import React from "react";
import Task from "./Task";

export default function TodoList({ tasks, setTasks }) {
  return (
    <div id="task-container">
      <ul>
        {tasks.map((item) => (
          <Task
            key={item.id}
            item={item.task}
            index={item.id}
            tasks={tasks}
            setTasks={setTasks}
            task={item}
          />
        ))}
        <Task
          key="998"
          item="Masak Ikan"
          index="998"
          tasks={tasks}
          setTasks={setTasks}
        />
        <Task
          key="999"
          item="Minum Air"
          index="998"
          tasks={tasks}
          setTasks={setTasks}
        />
      </ul>
    </div>
  );
}
