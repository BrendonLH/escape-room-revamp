import { useSelector, useDispatch } from "react-redux";
import { correctAnswer, incorrectAnswer } from "../../features/gameState/gameState.js";
import { useState } from "react";


export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles.riddlesArr[0];
  const riddleAnswer = riddle.answer;

  const [playerAnswer, setAnswer] = useState("");
  const dispatch = useDispatch();

  // handle the game logic/dispatch
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(playerAnswer.toLowerCase() === riddleAnswer.toLowerCase()) {
      alert('correct');
      dispatch(correctAnswer());
    }
    else {
      alert('incorrect');
    }
    setAnswer("");
  };

  console.log(game);
  return (
    <div>
      <h1>Game Page</h1>
      {<p>{riddle.riddle}</p>}
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={(e) => setAnswer(e.target.value)}
          value={playerAnswer}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
