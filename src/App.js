import PlayerForm from "./pages/mainPage/playerForm.js";
import "./pages/mainPage/main.scss";
import HowTo from "./pages/mainPage/howToPlay.js";
function App() {
  return (
    <div className="App">
      <div class="ghost">
        <div class="eye"></div>
        <div class="eye"></div>
        <div class="mouth"></div>
      </div>

      <h1 id="main-title">Escape Room</h1>
      <PlayerForm className="playerForm" />
      <HowTo className="howTo" />
    </div>
  );
}

export default App;
