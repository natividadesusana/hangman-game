export default function Kick(props) {

  return (
    <div className="container-kick">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        disabled={props.starting}
        onChange={props.inputChange}
        value={props.kicking}
      ></input>
      <button
        data-test="guess-button"
        disabled={props.starting}
        onClick={props.intuition}
      >
        Chutar
      </button>
    </div>
  );
}
