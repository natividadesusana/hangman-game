import forca6 from "../assets/img/forca6.png"

export default function Game(props) {

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="game-container">
        <div className="gallows-image">
          <img src={forca6}></img>
          <img data-test="game-image"
            src={`../assets/img/forca${props.errorNumbers}.png`}
            alt="gallows"
          ></img>
        </div>

        <div className="choose-word">
          <button data-test="choose-word" onClick={props.gameStarted} disabled={props.starting}>
            Escolher Palavra
          </button>

          <p data-test="word" answer={props.newWord} statusWord={props.status}>
            {props.state}
          </p>
        </div>
      </div>
    </div>
  );
}

