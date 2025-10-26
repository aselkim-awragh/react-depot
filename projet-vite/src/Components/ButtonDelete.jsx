function ButtonDelete({ deleteTask, index }) {
  return (
    <div>
      <input type="button" value="Delete" onClick={() => deleteTask(index)} />
    </div>
  );
}
export default ButtonDelete;
