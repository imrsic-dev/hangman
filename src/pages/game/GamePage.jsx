import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/game.context';
import { calculateMistakes, stringToArrayOfCharachters } from '../../utils';
import { NUMBER_OF_MAX_MISTAKES } from '../../constants';

import HangMan from '../../components/HangMan/HangMan.component';
import Quote from '../../components/Quote/Quote.component';
import Alphabet from '../../components/Alphabet/Alphabet.component';
import GameOverWon from '../../components/GameOver/GameOver.component';

const GamePage = () => {
  const navigate = useNavigate();
  const { isGameStarted, quote, difficultyLevel } = useGame();

  const uniqueQuoteLetters = new Set(
    stringToArrayOfCharachters(quote.text.toLowerCase())
  );

  console.log('uniqueQuoteLetters', uniqueQuoteLetters.size);

  const [mistakes, setMistakes] = useState(calculateMistakes(difficultyLevel));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  console.log('guessedLetters', guessedLetters);
  console.log('uniqueQuoteLetters', uniqueQuoteLetters);
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

  if (isGameOver) return <GameOverWon status="lost" score={0} />;
  if (isGameWon) return <GameOverWon status="won" score={12} />;

  return isGameStarted ? (
    <>
      <div>
        <HangMan numberOfMistakes={mistakes} />
      </div>
      <Quote quote={quote.text} guessedLetters={guessedLetters} />
      <Alphabet
        quote={quote.text}
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
