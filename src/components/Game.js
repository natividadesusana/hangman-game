
export default function Game(props) {

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="game-container">
        <div className="gallows-image">
          <img
            src={`../assets/img/forca${props.errorNumbers}.png`}
            alt="gallows"
          ></img>
        </div>

        <div className="choose-word">
          <button onClick={props.gameStarted} disabled={props.starting}>
            Escolher Palavra
          </button>

          <p answer={props.newWord} statusWord={props.status}>
            {props.state}
          </p>
        </div>
      </div>
    </div>
  );
}

