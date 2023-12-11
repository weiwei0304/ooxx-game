import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './components/winning-combinations';

// 檢查勝出條件

function derActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = derActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((preTurns) => {
      const currentPlayer = derActivePlayer(preTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
