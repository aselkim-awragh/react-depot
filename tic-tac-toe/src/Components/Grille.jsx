import Case from "./Case";
import JeuContext from "../Context/JeuContext";
import { useContext, useEffect } from "react";
import "./grille.css";
function Grille() {
  const {
    board,
    winner,
    setCurrentPlayer,
    setWinner,
    currentPlayer,
    movesRef,
    setGameStatus,
  } = useContext(JeuContext);
  useEffect(() => {
    console.log("Executing useEffect");
    if (winner) {
      return 0;
    }
    if (movesRef.current === 9) {
      setGameStatus("Draw");
      setWinner("Draw");
      return 0;
    }
    checkWinner();
  }, [board]);
  function checkWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const playerMoves = board.reduce((acc, value, index) => {
      if (value === currentPlayer) {
        acc.push(index);
      }
      return acc;
    });
    if (!playerMoves) return 0;
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        playerMoves.includes(a) &&
        playerMoves.includes(b) &&
        playerMoves.includes(c)
      ) {
        setWinner(currentPlayer);
        setGameStatus(`Winner : ${currentPlayer}`);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        movesRef.current += 1;
      }
    }
  }
  return (
    <div className="grille">
      {board.map((value, index) => (
        <Case key={index} value={value} index={index} />
      ))}
    </div>
  );
}

export default Grille;
