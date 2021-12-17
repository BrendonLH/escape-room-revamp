import { useSelector } from "react-redux";
import "./scorePage.scss";

export default function ScorePage() {
  const gameEnd = useSelector((state) => state.game);
  console.log(gameEnd);
  // const userPostURL = "https://escape-room-server.herokuapp.com/userPost";

  // send userscore to the DB

  // fetch(userPostURL, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     playerName: gameEnd.playerName,
  //     score: gameEnd.score
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // });

  return (
    <div className="ScorePage">
      <h2 className="player-score-name">
        {gameEnd.playerName.charAt(0).toUpperCase() +
          gameEnd.playerName.slice(1)}
        's Score
      </h2>
      <h3 className="final-score">{gameEnd.score}</h3>
    </div>
  );
}
