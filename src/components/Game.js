export default function Game(props) {

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="game-container">
        <div className="gallows-image">
          <img src={hanged} alt="hanged"></img>
        </div>

        <div className="choose-word">
          <button onClick={startGame}>Escolher Palavra</button>
          {/* <p>{underline}</p> */}
        </div>
      </div>
      <div className="kick">
        <p>Já sei a palavra!</p>
        <input></input>
        <button>chutar</button>
      </div>
    </div>
  );
}
