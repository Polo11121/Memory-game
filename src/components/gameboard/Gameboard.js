import React, { useEffect, useState } from "react";
import { getRandomImages, shuffle } from "../../functions/functions";
import { Button, IconButton, Modal, Slide } from "@material-ui/core";
import "./Gameboard.css";
import Card from "../card/Card";
import FlipMove from "react-flip-move";
import TimerIcon from "@material-ui/icons/Timer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Gameboard = ({ numOfPairs, difficultyText, setDifficulty }) => {
  // USESTATE HOOKS
  const [cardsInfo, setCardsInfo] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [showResultButton, setShowResultButton] = useState(false);
  const [currentPair, setCurrentPair] = useState({
    firstCard: { index: null, pairId: null },
    secondCard: { index: null, airId: null },
  });
  const [guessedPairsId, setGuessedPairsId] = useState([]);
  //USEEFFECT HOOKS

  //TIMER
  useEffect(() => {
    setTimeout(() => {
      if (guessedPairsId.length !== numOfPairs) {
        setTimer(timer + 1);
      }
    }, 1000);
  }, [timer]);
  /////////////////////////////////////////////////////////////////////

  //GET RANDOM PICTURES FROM LOREM PICSUM
  useEffect(() => {
    const arrayPom = getRandomImages(numOfPairs).map((x, index) => ({
      pairId: index,
      cardImage: `https://picsum.photos/id/${x}/150`,
    }));
    setCardsInfo(
      shuffle([...arrayPom, ...arrayPom]).map(
        ({ pairId, cardImage }, index) => ({
          pairId: pairId + 1,
          cardImage,
          index: index + 1,
        })
      )
    );
  }, [, playAgain]);
  /////////////////////////////////////////////////////////////////////

  //CHECK IF SELECTED CARD MATCHES
  useEffect(() => {
    if (currentPair.firstCard.pairId && currentPair.secondCard.pairId) {
      setMoves(moves + 1);

      if (currentPair.firstCard.pairId === currentPair.secondCard.pairId) {
        setGuessedPairsId([...guessedPairsId, currentPair.firstCard.pairId]);
      }
      setTimeout(() => {
        setCurrentPair({
          firstCard: { index: null, pairId: null },
          secondCard: { index: null, pairId: null },
        });
      }, 900);
    }
    //OPEN MODAL IF ALL currentPAIRS ARE GUESSED
    if (guessedPairsId.length === numOfPairs) {
      setIsResultOpen(true);
    }
  }, [currentPair]);
  /////////////////////////////////////////////////////////////////////

  return (
    <div className="gameboard">
      <div className="gameboard__info">
        <h2>
          <TimerIcon /> {timer}s
        </h2>
        <h2>pairs: {guessedPairsId.length}</h2>
        <h2>moves: {moves}</h2>
        <h1>
          Difficulty{" "}
          {isNaN(difficultyText) ? difficultyText : difficultyText + " pairs"}
        </h1>
        <IconButton
          onClick={() => {
            setDifficulty(null);
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      </div>
      {showResultButton && (
        <Button
          className="gameboard__resultButton"
          onClick={() => {
            setIsResultOpen(true);
            setShowResultButton(false);
          }}
        >
          result
        </Button>
      )}

      {/* MODAL */}
      <Modal open={isResultOpen}>
        <Slide direction="up" in={isResultOpen}>
          <div className="gameboard__modal">
            <div className="gameboard__modalInfo">
              <IconButton
                onClick={() => {
                  setIsResultOpen(false);
                  setShowResultButton(true);
                }}
                className="gameboard__modalExit"
              >
                <span>X</span>
              </IconButton>
              <div className="gameboard__modalInfoText">
                <h1>Result</h1>
                <h2>pairs: {guessedPairsId.length}</h2>
                <h2>moves: {moves}</h2>
                <h2>time: {timer}s</h2>
              </div>
              <div className="gameboard__modalInfoButtons">
                <Button
                  onClick={() => {
                    setPlayAgain(!playAgain);
                    setTimer(0);
                    setMoves(0);
                    setGuessedPairsId([]);
                    setIsResultOpen(false);
                  }}
                >
                  Play again!
                </Button>
                <Button onClick={() => setDifficulty(null)}>
                  change difficulty
                </Button>
              </div>
            </div>
          </div>
        </Slide>
      </Modal>
      {/* MODAL */}

      {/* CARDS */}
      <FlipMove className="gameboard__cards">
        {cardsInfo.map(({ pairId, cardImage, index }) => (
          <Card
            setCurrentPair={setCurrentPair}
            key={index}
            index={index}
            pairId={pairId}
            cardImage={cardImage}
            currentPair={currentPair}
            guessedPairsId={guessedPairsId}
          />
        ))}
      </FlipMove>
      {/* CARDS */}
    </div>
  );
};

export default Gameboard;
