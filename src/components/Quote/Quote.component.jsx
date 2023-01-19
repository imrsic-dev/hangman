import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { QuoteStyled, QuoteLetter, QuoteLetterContainer } from './Quote.style';
import { isAlphaNumeric } from '../../utils';

const quoteCreateJSX = (quote, guessedLetters) => {
  const quoteByWords = quote.toUpperCase().split(' ');
  return quoteByWords.map((word, i) => {
    const wordArray = [...word];

    return (
      <>
        <QuoteLetterContainer>
          {wordArray.map((letter) => {
            if (!isAlphaNumeric(letter)) {
              // eslint-disable-next-line react/jsx-key
              return <QuoteLetter>{letter}</QuoteLetter>;
            }
            return (
              // eslint-disable-next-line react/jsx-key
              <QuoteLetter borderBottom={true}>
                {guessedLetters.includes(letter) ? letter : null}
              </QuoteLetter>
            );
          })}
          {i + 1 < quoteByWords.length ? <QuoteLetter></QuoteLetter> : null}
        </QuoteLetterContainer>
      </>
    );
  });
};

const Quote = ({ quote, guessedLetters }) => {
  const quoteJSX = useMemo(
    () => quoteCreateJSX(quote, guessedLetters),
    [quote, guessedLetters]
  );

  return <QuoteStyled>{quoteJSX}</QuoteStyled>;
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired,
};

export default Quote;
