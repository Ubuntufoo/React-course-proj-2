import Player from './components/Player'

function App() {
  return (
    <main>
      <div style={{textAlign: "center"}}>
        <img src="./game-logo.png" alt="Game Logo" style={{ height: '150px', width: '150px', marginTop: "15px" }} />
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
