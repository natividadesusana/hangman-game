export default function Kick(props) {
    
  <div className="container-kick">
    <p>Já sei a palavra!</p>
    <input
      change={props.inputChange}
      disabled={props.starting}
      value={props.kicking}
    ></input>
    <button onClick={props.intuition} disabled={props.starting}>
      Chutar
    </button>
  </div>
}
