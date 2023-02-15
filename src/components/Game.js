import React from "react";
import forca0 from "../assets/img/forca0.png";
import Letters from "./Letters";


export default function Game() {
  const [gallowsImage, setGallowsImage] = React.useState(forca0);

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="game-container">
        <div className="gallows-image">
          <img src={gallowsImage} alt="Gallows Photo"></img>
        </div>

        <div className="choose-word">
          <button>Escolher Palavra</button>
          <p>_ _ _ _ _ _ _ _ _</p>
        </div>
      </div>
      <Letters  />
    </div>
  );
}
