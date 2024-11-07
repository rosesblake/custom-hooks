import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlip } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  //step 1 use
  const [isFlipped, toggleIsFlipped] = useFlip();

  return (
    <img
      src={isFlipped ? back : front}
      alt="playing card"
      onClick={toggleIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
