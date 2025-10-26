import { useState } from "react";
function NewTask({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  function addTask() {
    setTasks([...tasks, { title: newTask, status: false }]);
  }
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input type="button" value="Add" onClick={addTask} />
    </div>
  );
}
export default NewTask;
