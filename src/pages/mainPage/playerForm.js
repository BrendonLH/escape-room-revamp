import { useDispatch } from "react-redux";
import { addPlayer, addRiddles } from "../../features/gameState/gameState.js";
import "./main.scss";
import { Link } from "react-router-dom";
const riddleURL = "https://escape-room-server.herokuapp.com/riddles";

function PlayerForm() {
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch(addPlayer(event.target.value));
  }
  function handleSubmit(event) {
    return fetch(riddleURL)
      .then((res) => res.json())
      .then((data) => dispatch(addRiddles(data)));
  }
  return (
    <div className="playerForm">
      <form>
        <input
          required
          onChange={handleChange}
          placeholder="enter playername"
        />
      </form>
      <Link to="/game">
        <button onClick={handleSubmit}>Submit</button>
      </Link>
    </div>
  );
}

export default PlayerForm;
