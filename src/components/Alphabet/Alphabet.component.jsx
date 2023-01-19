import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AlphabetStyled } from './Alphabet.style';
import Letter from '../Letter/Letter.component';
import { ALPHABETS } from '../../constants';

const Alphabet = ({
  lang = 'en',
  quote,
  setGuessedLetters,
  setMistakes,
}) => {
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
    <AlphabetStyled>
      {alphabet.map((letter) => (
        <Letter key={`alph-letter-${letter}`} clickHandler={clickHandler}>
          {letter}
        </Letter>
      ))}
    </AlphabetStyled>
  );
};

Alphabet.propTypes = {
  lang: PropTypes.string,
  quote: PropTypes.string.isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
  setMistakes: PropTypes.func.isRequired
};

export default Alphabet;
