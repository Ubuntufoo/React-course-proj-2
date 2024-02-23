import { useState } from 'react'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([]); // [ {player: 'X', position: [0, 0]}, {player: 'O', position: [1, 1]}
  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer(rowIndex, colIndex) {
      setActivePlayer((currActivePlayer) => {
        return currActivePlayer === 'X' ? 'O' : 'X';
      });
      setGameTurns((prevTurns) => {
        let currentPlayer = 'X';

        if (prevTurns.length > 0 && prevTurns[0]?.player === 'X') {
          currentPlayer = 'O';
        }

        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

        return updatedTurns;
      });
    }


  return (
    <main>
      <h1 style={{textAlign: "center"}}>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
