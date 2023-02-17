import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import palavras from "../src/palavras";

export default function App() {
  const [stateWord, setStateWord] = useState("");
  const [error, setError] = useState(0);
  const [start, setStart] = useState(true);
  const [statusGame, setStatusGame] = useState("");

  let word = [];
  let underline = "";
  let reset = false;

  function reload() {
    document.location.reload();
  }

  function shuffle() {
    return Math.random() - 0.5;
  }

  function startGame() {
    if (reset) {
      reset = false;
      reload();
    }
    setError(0);

    palavras.sort(shuffle);
    word = Array.from(palavras[palavras.length - 1]);

    setStart(false);

    underline = "";
    for (let i = 0; i < word.length; i++) {
      underline += " _ ";
    }
    setStateWord(underline);
  }

  function letterClicked(buttons) {
    let positions = [];
    for (let i = 0; i < word.length; i++) {
      if (buttons === word[i]) {
        positions.push(i);
      }
    }
    if (positions.length !== 0) {
      let mapping = Array.from(underline);
      for (let x = 0; x < positions.length; x++) {
        mapping[positions[x]] = buttons;
      }
      underline = mapping.join("");
      setStateWord(underline);
    } else {
      setError(error + 1);
    }
  }

  return (
    <>
      <Game
        gameStarted={startGame}
        state={stateWord}
        starting={!start}
        newWord={word.join("")}
        status={statusGame}
        errorNumbers={error}
      />
      <Letters clickedLetter={letterClicked} starting={start} />
    </>
  );
}
