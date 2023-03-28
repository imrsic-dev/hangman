import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { LetterStyled } from './Letter.style';

const Letter = ({ children, clickHandler, ...props }) => {
  const [status, setStatus] = useState();
  const onClick = useCallback(
    (letter) => {
      if (!status) {
        clickHandler(letter, setStatus);
      }
    },
    [clickHandler, status]
  );
  return (
    <LetterStyled status={status} onClick={() => onClick(children)} {...props}>
      {children}
    </LetterStyled>
  );
};

Letter.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

export default Letter;
