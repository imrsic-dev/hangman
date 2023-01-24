import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/game.context';
import { calculateMistakes, stringToArrayOfCharachters } from '../../utils';
import { NUMBER_OF_MAX_MISTAKES } from '../../constants';

import HangMan from '../../components/HangMan/HangMan.component';
import Quote from '../../components/Quote/Quote.component';
import Alphabet from '../../components/Alphabet/Alphabet.component';
import GameOverWon from '../../components/GameOverWon/GameOverWon.component';
import Modal from '../../components/UI/Modal/Modal.component';

const GamePage = () => {
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
      <div>
        <HangMan numberOfMistakes={mistakes} />
      </div>
      <Quote quote={quote?.text} guessedLetters={guessedLetters} />
      <Alphabet
        quote={quote?.text}
        setMistakes={setMistakes}
        setGuessedLetters={setGuessedLetters}
      />
    </>
  ) : (
    <div>Loading</div>
  );
};

export default GamePage;

//TODO use set to get unique letters in the guessedLetters and unique letters from the quote
