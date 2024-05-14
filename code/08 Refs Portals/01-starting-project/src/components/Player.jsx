import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleChange() {
        setEnteredPlayerName(playerName.current.value)
    }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "undefined entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
