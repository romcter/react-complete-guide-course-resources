import {useState} from 'react'

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value);
    }

    let editableName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {editableName}
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
        </li>
    )
}