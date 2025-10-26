import ButtonEdit from "./ButtonEdit";
import { useState } from "react";
function Task({ task, index, setTasks }) {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.title);
  function handleSave() {
    setTasks((tasks) => [
      ...tasks.slice(0, index),
      { title: editTask, status: task.status },
      ...tasks.slice(index + 1, tasks.length),
    ]);
    setEdit((edit) => !edit);
  }
  return (
    <>
      {edit ? (
        <div>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <input type="button" value="Save" onClick={handleSave} />
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <p>{task.status}</p>
          <ButtonEdit setEdit={setEdit} />
        </div>
      )}
    </>
  );
}
export default Task;
