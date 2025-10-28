import { useContext } from "react";
import JeuContext from "../Context/JeuContext";
function StatusJeu() {
  const { gameStatus } = useContext(JeuContext);
  return (
    <div>
      <h2>{gameStatus}</h2>
    </div>
  );
}
export default StatusJeu;
