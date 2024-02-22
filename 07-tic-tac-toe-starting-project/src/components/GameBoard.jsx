// child component of Player.jsx to display the grid or the tic-tac-toe game board
import { useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ }) {

  return (
    <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => {
              return (
                <li key={rowIndex}>
                  <ol>
                    {row.map((playerSymbol, colIndex) => {
                      return (
                        <li key={colIndex}>
                          <button>{playerSymbol}</button>
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })}
          </ol>
        )
      }
