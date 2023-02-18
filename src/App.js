import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import Kick from "./components/Kick";
import palavras from "./palavras";



let word = [];
let underline = "";
let reset = false;


export default function App() {

  const [stateWord, setStateWord] = useState("");
  const [error, setError] = useState(0);
  const [start, setStart] = useState(true);
  const [statusGame, setStatusGame] = useState("");
  const [kick, setKick] = React.useState("");


  function reload() {
    document.location.reload();
  }


 


  function startGame() {
    if (reset) {
      reset = false;
      reload();
    }
    setError(0);

    palavras.sort(shuffle);
    
    function shuffle() {
      return Math.random() - 0.5;
    }
    
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
    endGame();
  }


  function kickGame() {
    if (word.join("") === kick.toLowerCase()) {
      setStatusGame("userWon");
      setStateWord(word);
      setStart(true);
      reset = true;
    } else if (word.join("") !== kick.toLowerCase()) {
      setStatusGame("userLost");
      setError(6);
      setStart(true);
      setStateWord(word);
      reset = true;
    }
  }


  function changeInput(e) {
    setKick(e.target.value);
  }


  function endGame() {
    if (error > 5 && underline !== word.join("")) {
      setStatusGame("userLost");
      setStart(true);
      setStateWord(word);
      setError(6);
      reset = true;
    } else if (underline === word.join("")) {
      setStatusGame("userWon");
      setStart(true);
      reset = true;
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
      <Kick
        starting={start}
        kicking={kick}
        inputChange={changeInput}
        intuition={kickGame}
      />
    </>
  );
}
