import { useEffect, useState } from "react";
import "../styles/index.css";

import Card from "./components/UI/card";
function App() {
  const [x, setX] = useState([{ name: "", url: "" }]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json().then((data) => data.results))

      .then((results) => {
        setX(results);
      });
  }, []);
  console.log(x);
  return (
    <div id="app">
      <header>
        <h1 className="text-3xl font-bold text-black">Memory Game</h1>
      </header>
      <main>
        <div id="card-grid">
          {x.map((item) => {
            const num = item.url.match(/\/(\d+)\/$/)?.[1];

            return (
              <Card
                title={item.name}
                imgSrc={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
                    (num || "") + ".png"
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
