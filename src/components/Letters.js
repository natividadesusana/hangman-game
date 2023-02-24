import React from "react";

export default function Letters({ clickedLetter, starting }) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="container-letters">
      <div className="letters">
        {alphabet.map((letter) => (
          <Buttons
            key={letter}
            clicked={() => clickedLetter(letter)}
            started={starting}
            buttons={letter.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
}

function Buttons({ usedLetters, clicked, started, buttons }) {
  return (
    <button
      data-test="letter"
      onClick={() => {
        clicked();
      }}
      className={
        started || usedLetters.includes(buttons.toLowerCase())
          ? "letters-selected"
          : "letters-unselected"
      }
      disabled={started || usedLetters.includes(buttons.toLowerCase())}
    >
      {buttons}
    </button>
  );
}
