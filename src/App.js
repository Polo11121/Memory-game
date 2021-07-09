import "./App.css";
import Home from "./components/home/Home";
import { useState } from "react";
import Game from "./components/game/Game";
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <div className="app">
      {/* HOME PAGE OR GAME */}
      {isGameStarted ? <Game /> : <Home setIsGameStarted={setIsGameStarted} />}
    </div>
  );
};

export default App;
