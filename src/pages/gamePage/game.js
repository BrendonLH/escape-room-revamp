import { useSelector } from "react-redux";
export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles.riddlesArr[0];

  return (
    <div>
      <h1>Game Page</h1>
      {<p>{riddle.riddle}</p>}
      <input type="text" placeholder="your answer" />
    </div>
  );
}
