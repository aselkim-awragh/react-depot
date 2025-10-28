import { createContext, useState, useEffect, useRef } from "react";
const JeuContext = createContext();
export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameStatus, setGameStatus] = useState("Next Player : X");
  const movesRef = useRef(0);
  return (
    <JeuContext.Provider
      value={{
        board,
        setBoard,
        winner,
        setWinner,
        currentPlayer,
        setCurrentPlayer,
        gameStatus,
        setGameStatus,
        movesRef,
      }}
    >
      {children}
    </JeuContext.Provider>
  );
};
export default JeuContext;
