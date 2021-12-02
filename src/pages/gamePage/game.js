import { useSelector } from "react-redux";
export default function Game() {
  const game = useSelector((state) => state.game);
  const riddle = game.riddles;
  console.log(riddle.riddlesArr);

  // having issue with async await

  return (
    <div>
      <h1>Game Page</h1>
      {/* {<p>{riddle}</p>} */}
      <input type="text" placeholder="your answer" />
    </div>
  );
}
