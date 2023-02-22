export default function Kick({starting, inputChange, kicking, intuition}) {
  return (
    <div className="container-kick">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        disabled={starting}
        onChange={inputChange}
        value={kicking}
        type="text"
        placeholder="Digite aqui seu chute..."
      ></input>
      <button
        data-test="guess-button"
        disabled={starting}
        onClick={intuition}
      >
        Chutar
      </button>
    </div>
  );
}
