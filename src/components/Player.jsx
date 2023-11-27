import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playName = <span className="player-name">{name}</span>;

  if (isEditing === true) {
    playName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
}
