import { useSelector } from "react-redux";
import "./scorePage.scss";

export default function ScorePage() {
  const gameEnd = useSelector((state) => state.game);
  console.log(gameEnd);
  const url= "https://escape-room-server.herokuapp.com/post";
  // const url = "http://localhost:8080/post";

  // send userscore to the DB
  function postScore() {
    fetch(url, {
     
      method: "POST",
      body: JSON.stringify({
          player: gameEnd.playerName,
          score: gameEnd.score
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  

  return (
    
    <div className="ScorePage">
      <h2 className="player-score-name">
        {gameEnd.playerName.charAt(0).toUpperCase() +
          gameEnd.playerName.slice(1)}
        's Score
      </h2>
      <h3 className="final-score">{gameEnd.score}</h3>
      <button onClick={postScore}>Submit Score!</button>
    </div>
  );
}
