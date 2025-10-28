import { useState } from "react";
import Board from "./Components/Grille";
import StatusJeu from "./Components/StatusJeu";
import BoutonRestart from "./Components/BoutonRestart";
import "./App.css";
import { GameProvider } from "./Context/JeuContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <GameProvider>
      {/*L'entiéreté de l'application sera contenu
      entre les 2 balises JeuContext */}
      <div>
        <StatusJeu />
        <Board />
        <BoutonRestart />
      </div>
    </GameProvider>
  );
}

export default App;
