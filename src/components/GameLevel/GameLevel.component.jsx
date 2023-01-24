import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useGame } from '../../context/game.context';
import { GameLevelStyled, GameLevelItem } from './GameLevel.style';

import { GAME_LEVEL_ITEMS } from '../../constants';

const GameLevel = ({ borderColor, gameLevelItems = GAME_LEVEL_ITEMS }) => {
  const { difficultyLevel, setDifficultyLevel } = useGame();
  const [isChecked, setIsChecked] = useState(difficultyLevel);

  const clickHandler = useCallback(
    (id) => {
      setIsChecked(id);
      setDifficultyLevel(id);
    },
    [setDifficultyLevel]
  );

  return (
    <GameLevelStyled>
      {gameLevelItems.map((item) => (
        <GameLevelItem
          key={item.id}
          checked={item.id === isChecked}
          onClick={clickHandler.bind(null, item.id)}
          borderColor={borderColor}
        >
          {item.text}
        </GameLevelItem>
      ))}
    </GameLevelStyled>
  );
};

GameLevel.propTypes = {
  borderColor: PropTypes.string,
  gameLevelItems: PropTypes.array
};

export default GameLevel;
