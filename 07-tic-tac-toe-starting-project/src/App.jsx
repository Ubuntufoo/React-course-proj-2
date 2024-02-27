import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0]?.player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // gameTurns structure - [ {player: 'X', position: [0, 0]}, {player: 'O', position: [1, 1]}
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (let turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol
    const secondSquareSymbol
    const thirdSquareSymbol
  }


    function handleActivePlayer(rowIndex, colIndex) {
      setGameTurns((prevTurns) => {
        const currentPlayer = derivedActivePlayer(prevTurns);
        const updatedTurns = [
          {
            square: { row: rowIndex, col: colIndex },
            player: currentPlayer,
          },
          ...prevTurns,
        ];

        return updatedTurns;
      });
    }

    return (
      <main>
        <h1 style={{ textAlign: "center" }}>Tic-Tac-Toe</h1>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} board={gameBoard} />
          <Log turns={gameTurns} />
        </div>
      </main>
    );
  }


export default App;
