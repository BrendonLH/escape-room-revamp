import { useSelector, useDispatch } from "react-redux";
import { correctAnswer } from "../../features/gameState/gameState.js";
export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles.riddlesArr[0];
  // console.log(game);

  const dispatch = useDispatch();
  let playerAnswer = "";

  function handleChange(event) {
    // dispatch(addPlayer(event.target.value));
    playerAnswer = event.target.value;
    return playerAnswer;
  }
  function submitAnswer(event) {
    console.log(playerAnswer);
    dispatch(correctAnswer());
  }

  console.log(game);
  return (
    <div>
      <h1>Game Page</h1>
      {<p>{riddle.riddle}</p>}
      <form>
        <input
          required
          onChange={handleChange}
          placeholder="enter playername"
        />
      </form>
      <button onClick={submitAnswer}>Submit</button>
    </div>
  );
}
