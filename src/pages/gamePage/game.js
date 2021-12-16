import { useSelector, useDispatch } from "react-redux";
import {
  correctAnswer,
  incorrectAnswer
} from "../../features/gameState/gameState.js";
import { useState } from "react";
import ScorePage from "../scorePage/scorePage.js";
import "./game.scss";

export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles.riddlesArr[0];

  const [playerAnswer, setAnswer] = useState("");
  const dispatch = useDispatch();

  // handle the game logic/dispatch

  const onHandleSubmit = (e) => {
    let riddleAnswer = riddle.answer;
    if (game.riddles.riddlesArr.length > 0) {
      e.preventDefault();
      if (playerAnswer.toLowerCase() === riddleAnswer.toLowerCase()) {
        dispatch(correctAnswer());
      } else {
        dispatch(incorrectAnswer());
      }
      setAnswer("");
    } else {
      alert("no more riddles");
    }
  };
  function nextRiddle() {
    if (game.riddles.riddlesArr.length > 0) {
      return (
        <div>
          {<p>{riddle.riddle}</p>}
          <form onSubmit={onHandleSubmit}>
            <input
              placeholder="anwser here"
              className="riddles"
              onChange={(e) => setAnswer(e.target.value)}
              value={playerAnswer}
              type="text"
            />
            <button className="ghost" type="submit">
              <div className="eye"></div>
              <div className="eye"></div>
              <div className="mouth"></div>
            </button>
          </form>
        </div>
      );
    } else {
      return <ScorePage />;
    }
  }

  return (
    <div className="Game">
      {nextRiddle()}
      <footer>
        <div className="tombstone">
          <div className="inscription">JFK</div>
        </div>
        <div className="tombstone">
          <div className="inscription">2Pac</div>
        </div>
        <div className="tombstone">
          <div className="inscription">
            {game.playerName.charAt(0).toUpperCase() + game.playerName.slice(1)}
          </div>
        </div>
        <div className="tombstone">
          <div className="inscription">Elvis</div>
        </div>
        <div className="tombstone">
          <div className="inscription">MJ</div>
        </div>
      </footer>
    </div>
  );
}
