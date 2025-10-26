function ButtonEdit({ setEdit }) {
  function handleClick() {
    setEdit((edit) => !edit);
  }
  const style = {
    backgroundColor: "#6369d1",
    color: "white",
    fontSize: "18px",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  };
  return (
    <div>
      <input style={style} type="button" value="Edit" onClick={handleClick} />
    </div>
  );
}

export default ButtonEdit;
