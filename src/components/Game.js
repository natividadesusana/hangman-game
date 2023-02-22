export default function Game({imgGallows, gameStarted, starting, newWord, status, state}) {
  
  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="game-container">
        <div className="gallows-image">
          <img
            data-test="game-image"
            src={imgGallows}
            alt="gallows"
          ></img>
        </div>

        <div className="choose-word">
          <button
            data-test="choose-word"
            onClick={gameStarted}
            disabled={starting}
          >
            Escolher Palavra
          </button>

          <p
            data-test="word"
            answer={newWord}
            className={`wordChoose ${status}`}
          >
            {state}
          </p>
        </div>
      </div>
    </div>
  );
}
