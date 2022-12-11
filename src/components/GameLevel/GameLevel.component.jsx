import React, { useState } from "react";
import { GameLevelStyled, GameLevelItem } from "./GameLevel.style";

import { GAME_LEVEL_ITEMS } from "../../constants";

const GameLevel = ({
  borderColor,
  gameLevelItems = GAME_LEVEL_ITEMS,
  indexItem = 0,
}) => {
  const idChecked = gameLevelItems[indexItem]?.id;
  const [isChecked, setIsChecked] = useState(idChecked);

  const clickHandler = (id) => {
    setIsChecked(id);
  };

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
