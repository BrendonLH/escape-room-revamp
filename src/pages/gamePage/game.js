import { useSelector } from "react-redux";
export default function Game() {
  const game = useSelector((state) => state.game);
  console.log(game, "game page state");
  // const playerName = game.playerName;
  // const riddle = game.riddles;
  return (
    <div>
      <h1>Game Page</h1>
    </div>
  );
}
