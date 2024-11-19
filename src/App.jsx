import { useState } from "react";
import "./App.css";

function App() {
  let highestScore = 0;
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  ]);
  const [cardsCompare, setCompare] = useState([]);

  function scoreUp() {
    setScore(score + 1);
  }

  function shuffleCards() {
    const shuffledArray = [];
    cards.map((item) => {
      let number = Math.floor(Math.random() * 10);
      shuffledArray.splice(number, 0, item);
    });
    setCards(shuffledArray);
  }

  function onClickAll() {
    scoreUp();
    shuffleCards();
  }

  return (
    <>
      <div className="header">
        <div>
          <h1>Memory card game</h1>
          <h2>
            Get points by clicking on an image. You lose if you click the image
            second time.
          </h2>
          <h2>Score: {score}</h2>
        </div>
        <div></div>
      </div>
      <CreateCards
        cards={cards}
        onClickAll={onClickAll}
        cardsCompare={cardsCompare}
        setCompare={setCompare}
      />
    </>
  );
}

function CreateCards({ cards, onClickAll }) {
  const array = cards.map((item, index) => {
    console.log(item);

    return (
      <div
        key={index}
        className="card"
        onClick={onClickAll}
        style={{ backgroundImage: "url(" + item + ")" }}
      ></div>
    );
  });

  return <div className="board">{array}</div>;
}

export default App;
