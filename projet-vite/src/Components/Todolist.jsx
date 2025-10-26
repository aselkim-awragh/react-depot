import { useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import ButtonDelete from "./ButtonDelete";
function Todolist() {
  const [tasks, setTasks] = useState([
    { title: "Apprendre React JS", status: false },
    { title: "Apprendre comment cuisiner un oeuf", status: false },
  ]);
  function deleteTask(index) {
    setTasks(tasks.filter((task, idx) => idx !== index));
  }
  return (
    <>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <Task task={task} tasks={tasks} index={index} setTasks={setTasks} />
            <ButtonDelete deleteTask={deleteTask} index={index} />
          </div>
        ))}
      </div>
      <div>
        <NewTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
export default Todolist;
