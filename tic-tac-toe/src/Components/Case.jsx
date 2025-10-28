import { useContext } from "react";
import JeuContext from "../Context/JeuContext";
function Case({ value, index }) {
  const { board, winner, setBoard, currentPlayer } = useContext(JeuContext);
  function handleClick() {
    const currentCase = board[index];
    if (currentCase != null) {
      return 0;
    }
    if (winner) {
      return 0;
    }
    var newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard((board) => [...newBoard]);
  }
  return (
    <div>
      <input type="button" value={index} onClick={handleClick} />
    </div>
  );
}
export default Case;
