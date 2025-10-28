import { useContext } from "react";
import JeuContext from "../Context/JeuContext";
function BoutonRestart() {
  const { setBoard, setWinner, setCurrentPlayer, movesRef, setGameStatus } =
    useContext(JeuContext);
  function handleClick() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    movesRef.current = 0;
    setGameStatus("Next Player : X");
  }
  return (
    <div>
      <input type="button" value="Restart" onClick={handleClick} />
    </div>
  );
}
export default BoutonRestart;
