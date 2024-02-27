// component for tic-tac-toe players
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditingTrue = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditingTrue()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
