import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';
import useQuote from '../hooks/useQuote';

import { GAME_LEVEL_ITEMS } from '../constants';

export const GameContext = createContext({
  isGameStarted: false,
  difficultyLevel: '',
  player: {
    username: '',
    score: 0,
  },
  quote: '',
  alphabet: '',
  setPlayer: () => {},
  setDificultyLevel: () => {},
  setRestartGame: () => {},
});

const GameProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [restartGame, setRestartGame] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(
    GAME_LEVEL_ITEMS[0].id
  );
  const [player, setPlayer] = useState({
    username: '',
    score: 0,
  });
  const [alphabet] = useState([]);

  const [quote, loading] = useQuote(restartGame, isGameStarted);

  console.log('quote', quote);

  const value = {
    isGameStarted,
    difficultyLevel,
    player,
    quote,
    loading,
    alphabet,
    setPlayer,
    setDifficultyLevel,
    setIsGameStarted,
    setRestartGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

GameProvider.propTypes = {
  children: PropTypes.node,
};

const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export { GameProvider, useGame };
