import { useDispatch, useSelector } from "react-redux";
import { addPlayer, addRiddles } from "../../features/gameState/gameState.js";
// const url = "https://catfact.ninja/fact";
const riddleURL = "https://escape-room-server.herokuapp.com/riddles";

function PlayerForm() {
  const game = useSelector((state) => state.game);
  console.log(game);
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
    <div>
      <form>
        <input
          required
          onChange={handleChange}
          placeholder="enter playername"
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PlayerForm;
