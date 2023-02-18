import React, { useState } from "react";

export default function Letters(props) {
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
              // key={letter}
              clicked={() => props.clickedLetter(letter)}
              started={props.starting}
              buttons={letter.toUpperCase()}
            />
          ))}
        </div>
      </div>
  );
}

function Buttons(props) {
  const [disabledButton, setDisabledButton] = useState(false);

  function disabling() {
    setDisabledButton(true);
  }

  return (
    <button
      disabled={props.started || disabledButton}
      onClick={() => {
        props.clicked();
        disabling();
      }}
      className={
        props.started || disabledButton
          ? "letters-selected"
          : "letters-unselected"
      }
      
    >
      {props.buttons}
    </button>
  );
}
