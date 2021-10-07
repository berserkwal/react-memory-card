import { useEffect, useState } from 'react';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
// import IncClrTest from './components/IncClrTest';
import Scoreboard from './components/Scoreboard';

function App() {
  const [levels] = useState([
    { lev: 1, count: 4 },
    { lev: 2, count: 6 },
    { lev: 3, count: 8 },
    { lev: 4, count: 10 },
    { lev: 5, count: 12 },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const [pokeData, setPokeData] = useState([]);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    () => localStorage.getItem('bestScore') || 0
  );
  const [currentLevel, setCurrentLevel] = useState(1);

  const increment = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const clear = () => {
    setCurrentScore(0);
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setIsLoading(true);
    for (let i = 0; i < levels[currentLevel - 1].count; i++) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${
          Math.floor(Math.random() * 898) + 1
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPokeData((prevData) => [
            ...prevData,
            {
              id: data.id,
              name: data.name,
              types: data.types,
            },
          ]);
        });
    }
  }, [currentLevel, levels]);

  useEffect(() => {
    if (pokeData.length === levels[currentLevel - 1].count) {
      setIsLoading(false);
    }
  }, [pokeData, levels, currentLevel]);

  useEffect(() => {
    if (currentScore > bestScore) {
      localStorage.setItem('bestScore', currentScore);
    }
  }, [currentScore, bestScore]);

  return (
    <div className='App'>
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {/* <IncClrTest increment={increment} clear={clear} /> */}
      <Gameboard
        pokeData={pokeData}
        isLoading={isLoading}
        currentLevel={currentLevel}
      />
    </div>
  );
}

export default App;
