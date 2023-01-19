import React from 'react';
import PropTypes from 'prop-types';
import FlexContainerStyled from './FlexContainer.style';

const FlexContainer = ({ children, ...props }) => (
  <FlexContainerStyled {...props}>{children}</FlexContainerStyled>
);

FlexContainer.propTypes = {
  children: PropTypes.node,
};

export default FlexContainer;
