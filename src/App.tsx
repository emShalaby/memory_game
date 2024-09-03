import { useEffect, useState } from "react";
import "../styles/index.css";

import Card from "./components/UI/card";
import Score from "./components/score";
function App() {
  const [cards, setCards] = useState([{ name: "", url: "" }]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=49")
      .then((response) => response.json().then((data) => data.results))

      .then((results) => {
        setCards(results);
      });
  }, []);
  const [score, setScore] = useState(0);
  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }
  function resetScore() {
    setScore((prevScore) => 0);
  }
  return (
    <div id="app" className="flex flex-col">
      <header className="flex w-[100%] max-w-[1440px] self-center">
        <h1 className="m-3 text-3xl font-bold text-black">Memory Game</h1>
        <div className="ml-auto">
          <Score />
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
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
