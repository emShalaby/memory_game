interface IScore {
  currentScore?: number;
  bestScore?: number;
}
export default function Score({ currentScore = 0, bestScore = 0 }: IScore) {
  return (
    <div id="score">
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}
