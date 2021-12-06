import { useSelector } from "react-redux";

export default function ScorePage() {
    const finalScore = useSelector((state) => state.game);
    console.log(finalScore);
    return (
        <div>
            <h2>{finalScore.playerName.charAt(0).toUpperCase() + finalScore.playerName.slice(1)}'s Score</h2>
            <h3>{finalScore.score}</h3>
        </div>
    )
}