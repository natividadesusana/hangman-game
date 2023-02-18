export default function Kick(props) {

  return (
    <div className="container-kick">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        disabled={props.starting}
        value={props.kicking}
        onChange={props.inputChange}
      ></input>
      <button
        data-test="guess-button" 
        onClick={props.intuition} 
        disabled={props.starting}>
        Chutar
      </button>
    </div>
  );
}
