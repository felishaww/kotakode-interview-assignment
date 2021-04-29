import React from "react";
import TodoForm from "./TodoForm";

export default function Task({ item, index, tasks, setTasks, task }) {
  const handleDelete = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  return (
    <div className="task-item">
      <li>{item}</li>
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
}
