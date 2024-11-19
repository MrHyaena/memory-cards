import { useState } from "react";
import "./App.css";

function App() {
  let highestScore = 0;
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      id: 0,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      id: 1,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 2,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      id: 3,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      id: 4,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      id: 5,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      id: 6,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      id: 7,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      id: 8,
    },
    {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      id: 9,
    },
  ]);
  const [cardsCompare, setCompare] = useState([]);
  const [identifier, setIdentifier] = useState([1]);
  const [highScore, setHighScore] = useState(0);

  function shuffleCards() {
    const shuffledArray = [];
    cards.map((item) => {
      let number = Math.floor(Math.random() * 10);
      shuffledArray.splice(number, 0, item);
    });
    setCards(shuffledArray);
  }

  function turnResult(id) {
    console.log(cardsCompare);
    console.log(id);

    const controlArray = cardsCompare.filter((item) => {
      console.log(item);
      return item === id;
    });
    console.log(controlArray);
    const newArray = cardsCompare;

    if (controlArray.length > 0) {
      console.log("end result");
      setHighScore(score);
      setScore(0);
      setCompare([]);
      setIdentifier(0);
    } else {
      newArray.push(id);
      setCompare(newArray);
      setScore(score + 1);
    }
    console.log(cardsCompare);
  }

  function onClickAll(id) {
    turnResult(id);
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
        identifier={identifier}
        setIdent={setIdentifier}
        score={score}
        highScore={highScore}
      />
    </>
  );
}

function CreateCards({ cards, onClickAll, identifier, setIdent, highScore }) {
  if (identifier > 0) {
    const array = cards.map((item, index) => {
      return (
        <div key={index} className="card" onClick={() => onClickAll(item.id)}>
          <img src={item.url}></img>
        </div>
      );
    });

    return <div className="board">{array}</div>;
  } else {
    return (
      <div className="newGame">
        <h1>You lost! Do you want to play another game?</h1>
        <h1>Your score was: {highScore}</h1>
        <button onClick={() => setIdent(1)}>Play new game</button>
      </div>
    );
  }
}

export default App;
