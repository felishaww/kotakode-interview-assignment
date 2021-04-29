import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Cuci Baju",
    },
    {
      id: 2,
      task: "Masak Nasi",
    },
  ]);

  const [inputTask, setInputTask] = useState("");
  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <TodoForm
        inputTask={inputTask}
        setInputTask={setInputTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
