import React, { useState } from "react";
import "./DiffPicker.css";
import { Button } from "@material-ui/core";
const DiffPicker = ({ setDifficulty }) => {
  //OWN DIFF
  const [ownDiff, setOwnDiff] = useState(4);
  return (
    <div className="diffPicker">
      <h1>CHOOSE DIFFICULTY</h1>
      <div className="diffPicker__buttons">
        {/* DIFF BUTTONS */}
        <Button
          onClick={() =>
            setDifficulty({ numOfPairs: 4, difficultyText: "Easy" })
          }
          className="diffPicker__buton--easy"
        >
          Easy
        </Button>
        <Button
          onClick={() =>
            setDifficulty({ numOfPairs: 8, difficultyText: "Medium" })
          }
          className="diffPicker__buton--medium"
        >
          Medium
        </Button>
        <Button
          onClick={() =>
            setDifficulty({ numOfPairs: 16, difficultyText: "Hard" })
          }
          className="diffPicker__buton--hard"
        >
          Hard
        </Button>
        {/* DIFF BUTTONS */}
      </div>
      {/* OWN DIFF */}
      <h2>Enter your own number of pairs</h2>
      <input
        min={2}
        max={50}
        type="number"
        value={ownDiff}
        onChange={(e) => e.target.value <= 50 && setOwnDiff(e.target.value)}
      />

      <Button
        onClick={() => {
          setDifficulty({
            numOfPairs: parseInt(ownDiff),
            difficultyText: parseInt(ownDiff),
          });
        }}
      >
        Play {ownDiff} pairs
      </Button>
      {/* OWN DIFF */}
    </div>
  );
};

export default DiffPicker;
