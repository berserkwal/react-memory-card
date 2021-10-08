// import { useEffect, useState } from 'react';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
// import IncClrTest from './components/IncClrTest';
import Scoreboard from './components/Scoreboard';
import { useGameState } from './hooks/useGameState';

function App() {
  const [
    currentScore,
    bestScore,
    currentLevel,
    cpData,
    isLoading,
    selectedCards,
    setCurrentLevel,
    setBestScore,
    setCurrentScore,
    setIsLoadingNextLevel,
    setSelectedCards,
    setCpData,
  ] = useGameState();

  const shuffleCards = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const increment = (name) => {
    setCurrentScore((prevState) => prevState + 1);
    setSelectedCards((prevState) => [...prevState, name]);
    setCpData((prevState) => shuffleCards([...prevState]));
  };

  const clear = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentLevel(1);
    setIsLoadingNextLevel(true);
    setCurrentScore(0);
  };

  const selectCard = (name) => {
    if (selectedCards.includes(name)) {
      clear();
    } else {
      increment(name);
    }
  };

  return (
    <div className='App'>
      <Header />
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        currentLevel={currentLevel}
      />
      {/* <IncClrTest increment={increment} clear={clear} /> */}
      <Gameboard
        selectCard={selectCard}
        pokeData={cpData}
        isLoading={isLoading}
        currentLevel={currentLevel}
      />
    </div>
  );
}

export default App;
