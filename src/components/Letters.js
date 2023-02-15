export default function Letters() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="container-letters">
      <div className="letters">
        {alphabet.map((letter) => (
          <button key={letter} disabled>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}


