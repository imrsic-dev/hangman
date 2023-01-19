import React from 'react';
import PropTypes from 'prop-types';
import PageContainerStyled from './PageContainer.style';

const PageContainer = ({ children }) => (
  <PageContainerStyled>{children}</PageContainerStyled>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
