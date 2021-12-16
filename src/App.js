import PlayerForm from "./pages/mainPage/playerForm.js";
import "./pages/mainPage/main.scss";
import HowTo from "./pages/mainPage/howToPlay.js";
function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h1 id="main-title">Escape Room</h1>
        <h2 id="main-subtitle">graveyard</h2>
      </div>
      <PlayerForm className="playerForm" />
      <HowTo className="howTo" />
    </div>
  );
}

export default App;
