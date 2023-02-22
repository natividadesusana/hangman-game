import React, { useState } from "react";

export default function Letters({clickedLetter, starting}) {
  
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

function Buttons({clicked, started, buttons}) {

  const [disabledButton, setDisabledButton] = useState(false);

  function disabling() {
    setDisabledButton(true);
  }

  return (
    <button
      data-test="letter"
      onClick={() => {
        clicked();
        disabling();
      }}
      className={
        started || disabledButton
          ? "letters-selected"
          : "letters-unselected"
      }
      disabled={started || disabledButton}
    >
      {buttons}
    </button>
  );
}
