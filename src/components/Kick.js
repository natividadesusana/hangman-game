export default function Kick(props) {

  return (
    <div className="container-kick">
      <p>Já sei a palavra!</p>
      <input
        disabled={props.starting}
        value={props.kicking}
        onChange={props.inputChange}
      ></input>
      <button onClick={props.intuition} disabled={props.starting}>
        Chutar
      </button>
    </div>
  );
}
