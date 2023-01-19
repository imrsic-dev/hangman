import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SadFace } from '../../assets/Sad_face.svg';
import { ReactComponent as HappyFace } from '../../assets/Happy_face.svg';
import {
  GameOverWonStyled,
  GameOverWonTitle,
  GameOverWonScore,
  GameOverWonScoreText,
  GameOverWonScoreNumber,
} from './GameOver.style';

const GameOverWon = ({ status, score = 0 }) => {
  console.log(status);
  return (
    <GameOverWonStyled>
      {status === 'won' ? <HappyFace /> : <SadFace />}
      <GameOverWonTitle>
        {status === 'won' ? 'You Won!' : 'Game Over'}
      </GameOverWonTitle>
      <GameOverWonScore>
        <GameOverWonScoreText>Your score: </GameOverWonScoreText>
        <GameOverWonScoreNumber>
          {status === 'won' ? score : 0}
        </GameOverWonScoreNumber>
      </GameOverWonScore>
    </GameOverWonStyled>
  );
};

GameOverWon.propTypes = {
  status: PropTypes.string,
  score: PropTypes.number,
};

export default GameOverWon;
