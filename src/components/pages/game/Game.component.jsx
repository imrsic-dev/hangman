import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../../context/game.context';
import { calculateMistakes, stringToArrayOfCharachters } from '../../../utils';
import { NUMBER_OF_MAX_MISTAKES } from '../../../constants';

import HangMan from '../../HangMan/HangMan.component';
import Quote from '../../Quote/Quote.component';
import Alphabet from '../../Alphabet/Alphabet.component';
import GameOverWon from '../../GameOverWon/GameOverWon.component';
import Modal from '../../UI/Modal/Modal.component';
import PageContainer from '../../Layout/PageContainer/PageContainer.component';
import FlexContainer from '../../Layout/FlexContainer/FlexContainer.component';
import BodyStyled from '../../../style/GlobalBodyStyle';

import mobileBackground from '../../../assets/Mobile_Bg.png';

const Game = () => {
  const navigate = useNavigate();
  const {
    isGameStarted,
    quote,
    loading,
    difficultyLevel,
    setIsGameStarted,
    setRestartGame,
  } = useGame();

  const uniqueQuoteLetters = quote
    ? new Set(stringToArrayOfCharachters(quote.text.toLowerCase()))
    : new Set([]);

  const [mistakes, setMistakes] = useState(calculateMistakes(difficultyLevel));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (mistakes === NUMBER_OF_MAX_MISTAKES) {
      setIsGameOver(true);
    }
  }, [mistakes]);

  useEffect(() => {
    if (uniqueQuoteLetters.size === guessedLetters.length) {
      setIsGameWon(true);
    }
  }, [uniqueQuoteLetters.size, guessedLetters.length]);

  useEffect(() => {
    if (!isGameStarted) {
      return navigate('/');
    }
  }, [isGameStarted, navigate]);

  const backToHomeHandler = () => {
    setIsGameStarted(false);
    return navigate('/');
  };

  const playAgainHandler = () => {
    setMistakes(calculateMistakes(difficultyLevel));
    setGuessedLetters([]);
    setRestartGame((prevState) => !prevState);
    setIsGameOver(false);
    setIsGameWon(false);
  };

  if (isGameOver)
    return (
      <Modal>
        <GameOverWon
          status="lost"
          score={0}
          backToHomeHandler={backToHomeHandler}
          playAgainHandler={playAgainHandler}
        />
      </Modal>
    );
  if (isGameWon)
    return (
      <Modal>
        <GameOverWon
          status="won"
          score={12}
          backToHomeHandler={backToHomeHandler}
          playAgainHandler={playAgainHandler}
        />
      </Modal>
    );

  return isGameStarted && quote && !loading ? (
    <>
      <BodyStyled backgroundImage={mobileBackground} />
      <PageContainer>
        <FlexContainer padding="27px 0">
          <HangMan numberOfMistakes={mistakes} width="138" height="199" />
        </FlexContainer>
        <Quote quote={quote?.text} guessedLetters={guessedLetters} />
        <Alphabet
          quote={quote?.text}
          setMistakes={setMistakes}
          setGuessedLetters={setGuessedLetters}
        />
      </PageContainer>
    </>
  ) : (
    <div>Loading</div>
  );
};

export default Game;

//TODO use set to get unique letters in the guessedLetters and unique letters from the quote
