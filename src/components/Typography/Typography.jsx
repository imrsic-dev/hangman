import styled, { css } from 'styled-components';

const H1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.aladin};
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
  line-height: ${(props) => props.theme.spacings.lineHeight.xxl};
  color: ${(props) => props.color || props.theme.colors.blue};

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
`;

const P = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.fontSize.m};
  line-height: ${(props) => props.theme.spacings.lineHeight.l};
  color: ${(props) => props.color || props.theme.colors.blue};

  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};

  ${(props) =>
    props.flexBasis &&
    css`
      flex-basis: ${props.flexBasis};
    `};
`;

const Ul = styled.ul`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.spacings.lineHeight.l};
  padding: ${(props) =>
    props.padding || `0 ${props.theme.spacings.padding.xs}`};
  color: ${(props) => props.color || props.theme.colors.blue};

  list-style-type: ${(props) => props.listStyleType || '\'-\''};
`;

export { H1, P, Ul };
