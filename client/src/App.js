import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Cuci Baju",
      status: false
    },
    {
      id: 2,
      task: "Masak Nasi",
      status: false
    },
    
  ]);

  const [inputTask, setInputTask] = useState("");
  return (
    <div className="App">
      <h1 className="text-super heading">Pekerjaan Rumah Yang Perlu Dilakukan</h1>
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
