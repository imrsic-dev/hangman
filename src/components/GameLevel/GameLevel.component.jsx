import React, { useState, useCallback } from "react";
import { useGame } from "../../context/game.context";
import { GameLevelStyled, GameLevelItem } from "./GameLevel.style";

import { GAME_LEVEL_ITEMS } from "../../constants";

const GameLevel = ({ borderColor, gameLevelItems = GAME_LEVEL_ITEMS }) => {
  const { difficultyLevel, setDifficultyLevel, setIsGameRestarted } = useGame();
  const [isChecked, setIsChecked] = useState(difficultyLevel);

  const clickHandler = useCallback(
    (id) => {
      setIsChecked(id);
      setDifficultyLevel(id);
      setIsGameRestarted(true);
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

export default GameLevel;
