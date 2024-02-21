// component for tic-tac-toe players
import { useState } from 'react'

export default function Player({ name, symbol }) {

  const [isEditing, setIsEditing] = useState(false)

  const handleEditingTrue = () => {
    setIsEditing((editing) => !editing)
  }

  return (
    <li>
      <span className="player">
        {isEditing
          ? <input type="text" value={name} />
          : <span className="player-name">{name}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditingTrue()} >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )

}