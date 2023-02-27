import React from "react";

export default function Letters({clickedLetter, starting, lettersUsed}) {
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
            lettersUsed={lettersUsed}
          />
        ))}
      </div>
    </div>
  );
}

function Buttons({lettersUsed, clicked, started, buttons}) {

  return (
    <button
      data-test="letter"
      onClick={() => {
        clicked();
      }}
      className={
        started || lettersUsed.includes(buttons.toUpperCase())
          ? "letters-selected"
          : "letters-unselected"
      }
      disabled={started || lettersUsed.includes(buttons.toUpperCase())}
    >
      {buttons}
    </button>
  );
}
