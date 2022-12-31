import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/game.context";

const GamePage = () => {
  const navigate = useNavigate();
  const { isGameStarted } = useGame();
  useEffect(() => {
    if (!isGameStarted) {
      return navigate("/");
    }
  }, [isGameStarted]);

  return isGameStarted ? <div>Game page</div> : <div>Loading</div>;
};

export default GamePage;
