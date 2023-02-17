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
    <>
      <div className="container-letters">
        <div className="letters">
          {alphabet.map((letter) => (
            <Buttons
              key={letter}
              clicked={() => props.clickedLetter(letter)}
              started={props.starting}
              buttons={letter.toUpperCase()}
            />
          ))}
        </div>
      </div>
      

      {/* teste... isso não fica aqui */}
      {/* <div className="container-kick">
        <p>Já sei a palavra!</p>
        <input
          change={props.inputChange}
          disabled={props.starting}
          value={props.kicking}
        ></input>
        <button onClick={props.intuition} disabled={props.starting}>
          CHUTAR
        </button>
      </div> */}

    </>
  );
}

function Buttons(props) {
  const [disabledButton, setDisabledButton] = useState(false);

  function disabling() {
    setDisabledButton(true);
  }

  return (
    <button
      onClick={() => {
        props.clicked();
        disabling();
      }}
      className={
        props.started || disabledButton
          ? "letters-selected"
          : "letters-unselected"
      }
      disabled={props.started || disabledButton}
    >
      {props.buttons}
    </button>
  );
}
