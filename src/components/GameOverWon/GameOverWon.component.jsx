import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import { ReactComponent as SadFace } from '../../assets/Sad_face.svg';
import { ReactComponent as HappyFace } from '../../assets/Happy_face.svg';
import {
  GameOverWonStyled,
  GameOverWonTitle,
  GameOverWonScore,
  GameOverWonScoreText,
  GameOverWonScoreNumber,
  ButtonContainer,
} from './GameOverWon.style';

const GameOverWon = ({ status, score = 0, playAgainHandler, backToHomeHandler }) => {
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
      <ButtonContainer>
        <Button onClickHandler={playAgainHandler}>Play again</Button>
        <Button inverted onClickHandler={backToHomeHandler}>Back to home</Button>
      </ButtonContainer>
    </GameOverWonStyled>
  );
};

GameOverWon.propTypes = {
  status: PropTypes.string,
  score: PropTypes.number,
  playAgainHandler: PropTypes.func.isRequired,
  backToHomeHandler: PropTypes.func.isRequired,
};

export default GameOverWon;
