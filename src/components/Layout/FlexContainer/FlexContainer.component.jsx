import React from "react";
import FlexContainerStyled from "./FlexContainer.style";

const FlexContainer = ({ children, ...props }) => (
  <FlexContainerStyled {...props}>{children}</FlexContainerStyled>
);

export default FlexContainer;
