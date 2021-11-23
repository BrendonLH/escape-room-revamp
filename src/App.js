import PlayerForm from "./pages/mainPage/playerForm.js";
import "./pages/mainPage/main.scss";
import HowTo from "./pages/mainPage/howToPlay.js";

function App() {
  return (
    <div className="App">
      <h1>Escape Room</h1>
      <PlayerForm className="playerForm" />
      <HowTo className="howTo" />
    </div>
  );
}

export default App;
