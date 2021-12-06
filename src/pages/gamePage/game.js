import { useSelector, useDispatch } from "react-redux";
import { correctAnswer, incorrectAnswer } from "../../features/gameState/gameState.js";
import { useState } from "react";


export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles.riddlesArr[0];
  

  const [playerAnswer, setAnswer] = useState("");
  const dispatch = useDispatch();


  // handle the game logic/dispatch

  const onHandleSubmit = (e) => {
    let riddleAnswer = riddle.answer;
    if(game.riddles.riddlesArr.length > 0) {
      e.preventDefault();
      if(playerAnswer.toLowerCase() === riddleAnswer.toLowerCase()) {
        alert('correct');
        dispatch(correctAnswer());
      }
      else {
        alert('incorrect');
        dispatch(incorrectAnswer());
      }
      setAnswer("");
  }
  else {
    alert('no more riddles');
  }
}
function testFunc() {
    if(game.riddles.riddlesArr.length > 0) {
      return <div>
        <h1>Welcome {game.playerName.charAt(0).toUpperCase() + game.playerName.slice(1)}</h1>
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
    }
    else {
      return <h1>nothing in arrayRiddles</h1>
    }
}

    return (
      <div>{testFunc()}</div>
     
    );
}
