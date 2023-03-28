import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AlphabetStyled } from './Alphabet.style';
import Letter from '../Letter/Letter.component';
import { Container } from '../pages/home/Home.style';
import { ALPHABETS } from '../../constants';

const Alphabet = ({ lang = 'en', quote, setGuessedLetters, setMistakes }) => {
  const alphabet = useMemo(() => ALPHABETS[lang], [lang]);
  const clickHandler = (letter, setLetterStatus) => {
    if (!quote.toLowerCase().includes(letter.toLowerCase())) {
      setLetterStatus('error');
      setMistakes((prevState) => prevState + 1);
    } else {
      setLetterStatus('success');
      setGuessedLetters((prevState) => [...prevState, letter.toUpperCase()]);
    }
  };

  return (
    <Container>
      <AlphabetStyled>
        {alphabet.map((letter) => (
          <Letter
            key={`alph-letter-${letter}`}
            clickHandler={clickHandler}
            minWidth="48px"
            minHeight="42px"
          >
            {letter}
          </Letter>
        ))}
      </AlphabetStyled>
    </Container>
  );
};

Alphabet.propTypes = {
  lang: PropTypes.string,
  quote: PropTypes.string.isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
  setMistakes: PropTypes.func.isRequired,
};

export default Alphabet;
