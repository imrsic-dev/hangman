import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.style';

const Button = ({ inverted, onClickHandler, children }) => (
  <ButtonStyled inverted={inverted} onClick={onClickHandler}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node,
  onClickHandler: PropTypes.func.isRequired,
  inverted: PropTypes.bool.isRequired,
};

export default Button;
