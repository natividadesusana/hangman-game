import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import Kick from "./components/Kick";
import palavras from "./palavras";

import forca0 from "./assets/img/forca0.png";
import forca1 from "./assets/img/forca1.png";
import forca2 from "./assets/img/forca2.png";
import forca3 from "./assets/img/forca3.png";
import forca4 from "./assets/img/forca4.png";
import forca5 from "./assets/img/forca5.png";
import forca6 from "./assets/img/forca6.png";

let word = [];
let underline = "";
let reset = false;

export default function App() {
  const [stateWord, setStateWord] = useState("");
  const [error, setError] = useState(0);
  const [start, setStart] = useState(true);
  const [statusGame, setStatusGame] = useState("");
  const [kick, setKick] = useState("");
  const [image, setImage] = useState(forca0);

  const refresh = () => window.location.reload(true);

  const shuffle = () => Math.random() - 0.5;

  function startGame() {
    if (reset) {
      reset = false;
      refresh();
    }
    setError(0);
    setImage(forca0);
    palavras.sort(shuffle);
    word = Array.from(palavras[palavras.length - 1].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''));
    setStart(false);
    underline = "";
    for (let i = 0; i < word.length; i++) {
      underline += "_";
    }
    setStateWord(underline);
  }

  function letterClicked(buttons) {
    const positions = [];
    for (let z = 0; z < word.length; z++) {
      if (buttons === word[z]) {
        positions.push(z);
      }
    }
    if (positions.length !== 0) {
      const mapping = Array.from(underline);
      for (let x = 0; x < positions.length; x++) {
        mapping[positions[x]] = buttons;
      }
      underline = mapping.join("");
      setStateWord(underline);
    } else {
      setError(error + 1);
      gallowsState();
    }
    endGame();
  }

  function gallowsState() {
    const gallowsImage = [
      forca0,
      forca1,
      forca2,
      forca3,
      forca4,
      forca5,
      forca6,
    ];
    setImage(gallowsImage[error + 1]);
    endGame();
  }

  function kickGame() {
    if (word.join("") === kick.toLowerCase().normalize("NFD").replace(/[^a-z\s]/g, "")) {
      setKick('');
      setStatusGame("userWon");
      setStateWord(word);
      setStart(true);
      reset = true;
      // alert("❇️ Você ganhou! ❇️");
    } else if (word.join("") !== kick.toLowerCase().normalize("NFD").replace(/[^a-z\s]/g, "")) {
      setKick('');
      setStatusGame("userLost");
      setError(6);
      setStart(true);
      setStateWord(word);
      reset = true;
      // alert("💢 Você perdeu! 💢");
      setImage(forca6);
    }
  }

  function endGame() {
    if (error > 5 && underline !== word.join("")) {
      setStatusGame("userLost");
      setStart(true);
      setStateWord(word);
      setError(6);
      // alert("💢 Você perdeu! 💢");
      setImage(forca6);
      reset = true;
    } else if (underline === word.join("")) {
      setStatusGame("userWon");
      setStart(true);
      reset = true;
      // alert("❇️ Você ganhou! ❇️");
    }
  }

  function changeInput(e) {
    setKick(e.target.value);
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
        imgGallows={image}
      />
      <Letters starting={start} clickedLetter={letterClicked} />
      <Kick
        starting={start}
        kicking={kick}
        inputChange={changeInput}
        intuition={kickGame}
      />
    </>
  );
}
