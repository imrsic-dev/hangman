import React from "react";
import ButtonStyled from "./Button.style";

const Button = ({ inverted, onClickHandler, children }) => (
  <ButtonStyled inverted={inverted} onClick={onClickHandler}>
    {children}
  </ButtonStyled>
);

export default Button;
