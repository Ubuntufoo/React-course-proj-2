// a component for the log of the tic-tac-toe game

export default function Log({ turns }) {
  return (
    <div>
      <h2>Game Log</h2>
      <ol>
        {turns.map((turn, index) => {
          const { player, square } = turn;
          const { row, col } = square;
          return (
            <li key={index}>
              Player {player} played at row {row}, column {col}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
