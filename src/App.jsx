import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" />
          <Player name="player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
