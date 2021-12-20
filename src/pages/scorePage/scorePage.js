import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./scorePage.scss";

export default function ScorePage() {
  const [scores, setScores] = useState([]);
  const [scoresID] = useState(0);

  const gameEnd = useSelector((state) => state.game);

  const url = "https://escape-room-server.herokuapp.com/post";
  // const url = "http://localhost:8080/post";

  const scoresUrl = "https://escape-room-server.herokuapp.com/scores";
  // const scoresUrl= "http://localhost:8080/scores";

  // send userscore to the DB
  async function postScore() {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        player: gameEnd.playerName,
        score: gameEnd.score
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }
  // use this fetch and dispatch to state for high scores
  const getScoresFunc = async () => {
    const scoresCall = await fetch(scoresUrl);
    const calledScores = await scoresCall.json();
    console.log(calledScores, "called scores");
    setScores(calledScores.scoresArr);
  };
  useEffect(() => {
    getScoresFunc();
  }, [scoresID]);
  console.log(scores);

  return (
    <div className="ScorePage">
      <h2 className="player-score-name">
        {gameEnd.playerName.charAt(0).toUpperCase() +
          gameEnd.playerName.slice(1)}
        's Score
      </h2>
      <h3 className="final-score">{gameEnd.score}</h3>
      <button onClick={postScore}>Submit Score!</button>
      <div>
        <h2>Top Scores</h2>
        <ol className="high-scores">
          {scores.map(({ player, score }) => (
            <li key={player}>
              Player: {player} Score:{score}.
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
