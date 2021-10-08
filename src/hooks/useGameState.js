import { useState, useEffect } from 'react';

export const useGameState = () => {
  const [levels] = useState([
    { lev: 1, count: 4 },
    { lev: 2, count: 6 },
    { lev: 3, count: 8 },
    { lev: 4, count: 10 },
    { lev: 5, count: 12 },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingNextLevel, setIsLoadingNextLevel] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [bestScore, setBestScore] = useState(
    () => localStorage.getItem('bestScore') || 0
  );
  const [cpData, setCpData] = useState([]);
  const [usedID, setUsedID] = useState([]);

  useEffect(() => {
    if (
      selectedCards.length === levels[currentLevel - 1].count &&
      currentLevel < 5
    ) {
      setIsLoadingNextLevel(true);
      setCurrentLevel((prevState) => prevState + 1);
    }
  }, [selectedCards]);

  const getRandom = () => {
    while (true) {
      const random = Math.floor(Math.random() * 898) + 1;
      if (!usedID.includes(random)) return random;
    }
  };

  useEffect(() => {
    if (currentScore === 0 || (currentLevel > 1 && isLoadingNextLevel)) {
      setIsLoading(true);
      setPokeData([]);
      setSelectedCards([]);
      for (let i = 0; i < levels[currentLevel - 1].count; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${getRandom()}`)
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
            setUsedID((prevState) => [...prevState, data.id]);
          });
      }
    }
  }, [currentLevel, currentScore]);

  useEffect(() => {
    if (pokeData.length === levels[currentLevel - 1].count) {
      setCpData([...pokeData]);
      setIsLoading(false);
      setIsLoadingNextLevel(false);
      setUsedID([]);
    }
  }, [pokeData]);

  useEffect(() => {
    localStorage.setItem('bestScore', bestScore);
  }, [bestScore]);

  return [
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
  ];
};
