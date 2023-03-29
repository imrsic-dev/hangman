import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { QuoteStyled, QuoteLetter, QuoteLetterContainer } from './Quote.style';
import { isAlphaNumeric } from '../../utils';

const quoteCreateJSX = (quote, guessedLetters) => {
  const quoteByWords = quote.toUpperCase().split(' ');
  return quoteByWords.map((word, index) => {
    const wordArray = [...word];
    return (
      <>
        <QuoteLetterContainer key={index}>
          {wordArray.map((letter, i) => {
            if (!isAlphaNumeric(letter)) {
              return (
                <QuoteLetter key={letter + i} minWidth="12px" lineHeight="0.8">
                  {letter}
                </QuoteLetter>
              );
            }
            return (
              <QuoteLetter key={letter + i} borderBottom={true}>
                {guessedLetters.includes(letter) ? letter : null}
              </QuoteLetter>
            );
          })}
          {index + 1 < quoteByWords.length ? (
            <QuoteLetter key={index} minWidth="12px"></QuoteLetter>
          ) : null}
        </QuoteLetterContainer>
      </>
    );
  });
};

const Quote = ({ quote, guessedLetters }) => {
  const quoteJSX = useMemo(
    () => quoteCreateJSX(quote, guessedLetters),
    [quote, guessedLetters],
  );

  return <QuoteStyled>{quoteJSX}</QuoteStyled>;
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired,
};

export default Quote;
