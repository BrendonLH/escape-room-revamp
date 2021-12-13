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

  function getRiddles() {
    return fetch(riddleURL)
      .then((res) => res.json())
      .then((data) => dispatch(addRiddles(data)));
  }
  getRiddles();
  return (
    <div className="playerForm">
      <form>
        <input
          required
          onChange={handleChange}
          placeholder="enter you're name!"
        />
      </form>
      <div className="tombstone">
        <Link className="link" to="/game">
          <div className="inscription">Start</div>
        </Link>
        <div className="dirt"></div>
      </div>
    </div>
  );
}

export default PlayerForm;
