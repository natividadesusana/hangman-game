import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import palavras from "../palavras";

export default function App() {

  // const [start, startGame] = useState(false);
  const [stateWord, setStateWord] = useState("");
  const [error, setError] = useState(0);
  const [start, setStart] = React.useState(true);

  let word = [];
  let underline = "";

  function letterClicked(buttons) {
    let positions = [];
    for (let i = 0; i < word.length; i++) {
      if (buttons === word[i]) {
        positions.push[i];
      }
    }
    if (positions.length !== 0) {
      let mapping = Array.from(underline);
      for (let x = 0; x < positions.length; x++) {
        mapping[positions[x]] = buttons;
      }
      underline = mapping.join("");
      setStateWord(underline);
    } else setError(error + 1);
  }

  return (
    <>
      <Game startGame={startGame} />
      <Letters clickedLetter={letterClicked} starting={start} />
    </>
  );
}
