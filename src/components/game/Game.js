import React, { useState } from "react";
import "./Game.css";
import DiffPicker from "../diffpicker/DiffPicker";
import Gameboard from "../gameboard/Gameboard";
const Game = () => {
  const [difficulty, setDifficulty] = useState(null);
  return (
    <div className="game">
      {difficulty ? (
        <Gameboard {...difficulty} setDifficulty={setDifficulty} />
      ) : (
        <DiffPicker setDifficulty={setDifficulty} />
      )}
    </div>
  );
};

export default Game;
