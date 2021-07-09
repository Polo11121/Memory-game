import React, { forwardRef, useEffect, useState } from "react";
import "./Card.css";
import ReactCardFlip from "react-card-flip";
const Card = forwardRef(
  (
    { guessedPairsId, pairId, index, cardImage, setCurrentPair, currentPair },
    ref
  ) => {
    const [isFlipped, setIsFlipped] = useState(false);
    //FLIP CARD FUNCTION
    const flipCard = () => {
      if (currentPair.firstCard.index && currentPair.secondCard.index) {
      } else {
        if (!isFlipped) {
          if (currentPair.firstCard.index) {
            setCurrentPair({
              ...currentPair,
              secondCard: { index: index, pairId: pairId },
            });
          } else {
            setCurrentPair({
              ...currentPair,
              firstCard: { index: index, pairId: pairId },
            });
          }
        }
      }
    };
    //CHECK TO FLIP CARD
    useEffect(() => {
      currentPair.firstCard.index === index ||
      currentPair.secondCard.index === index ||
      guessedPairsId.includes(pairId)
        ? setIsFlipped(true)
        : setIsFlipped(false);
    }, [guessedPairsId, currentPair]);

    return (
      <div ref={ref} onClick={flipCard} className="card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Question_Mark_Icon_-_Blue_Box.svg/150px-Question_Mark_Icon_-_Blue_Box.svg.png"
            alt=""
          />
          <img className="card__flipped" src={cardImage} alt="" />
        </ReactCardFlip>
      </div>
    );
  }
);

export default Card;
