import { useEffect, useState } from "react";
import "../styles/index.css";

import Card from "./components/UI/card";
import Score from "./components/score";
function App() {
  const [cards, setCards] = useState([{ name: "", url: "" }]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=49")
      .then((response) => response.json().then((data) => data.results))

      .then((results) => {
        setCards(results);
      });
  }, []);

  function scoreHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const cardId = e.currentTarget.id;
    if (clickedCards.includes(cardId)) {
      setCurrentScore(0);
      setClickedCards([]);
      return true;
    }
    setClickedCards((prevClickedCards) => {
      const clonedCards = prevClickedCards;
      let newCards = clonedCards;
      newCards.push(cardId);
      return newCards;
    });
    setCurrentScore((prevScore) => {
      const newScore = prevScore + 1;

      setHighestScore((prevHighestScore) =>
        Math.max(prevHighestScore, newScore),
      );

      // Log the new score
      console.log(newScore);

      return newScore;
    });
  }
  return (
    <div id="app" className="flex flex-col">
      <header className="flex w-[100%] max-w-[1440px] self-center">
        <h1 className="m-3 text-3xl font-bold text-black">Memory Game</h1>
        <div className="ml-auto">
          <Score currentScore={currentScore} bestScore={highestScore} />
        </div>
      </header>
      <main className="flex w-full justify-center">
        <div
          id="card-grid "
          className="flex max-w-[1440px] flex-wrap justify-center"
        >
          {cards.map((item) => {
            const num = item.url.match(/\/(\d+)\/$/)?.[1];

            return (
              <Card
                title={item.name}
                imgSrc={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
                  (num || "") +
                  ".png"
                }
                key={item.name}
                onClick={(e) => scoreHandler(e)}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
