import React from "react";
import TodoForm from "./TodoForm";

export default function Task({ item, index, tasks, setTasks, task }) {
  const handleDelete = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  const handleCompleteMark = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id == task.id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };

  return (
    <div className="task-item">
        <li className={`${task.status ? "complete" : " "}`}>{item}</li>
      <div className="button-container">
      <button onClick={handleCompleteMark} className={`${task.status ? "complete" : " "}`}>Check</button>
      <button onClick={handleDelete}>Hapus</button>
      </div>
    </div>
  );
}
