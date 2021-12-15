import { useSelector } from "react-redux";
import "./scorePage.scss";

export default function ScorePage() {
  const finalScore = useSelector((state) => state.game);
  console.log(finalScore);
  return (
    <div className="ScorePage">
      <h2 className="player-score-name">
        {finalScore.playerName.charAt(0).toUpperCase() +
          finalScore.playerName.slice(1)}
        's Score
      </h2>
      <h3 className="final-score">{finalScore.score}</h3>
    </div>
  );
}
