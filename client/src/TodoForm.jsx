import React from "react";

export default function TodoForm({ setInputTask, inputTask, tasks, setTasks }) {
  const handleTaskInput = (e) => {
    setInputTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { 
        id: tasks.length + 1, 
        task: inputTask,
        status: false
    }]);
    setInputTask("");
  };

  return (
    <div>
      <form>
        <input id="taskInput" value={inputTask} type="text" onChange={handleTaskInput} />
        <button type="submit" onClick={handleTaskSubmit}>
          Tambah
        </button>
      </form>
    </div>
  );
}
