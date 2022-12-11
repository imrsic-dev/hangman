import styled, { css } from "styled-components";

const invertedStyle = css`
  color: ${(props) => props.theme.colors.orange};
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.orange};
  transition: color 0.3s, border-color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
    background-color: transparent;
  }
`;

const ButtonStyled = styled.button`
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.spacings.lineHeight.l};
  padding: ${(props) => props.padding || `${props.theme.spacings.padding.m}`};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.orange};
  border: none;
  border-radius: 15px;
  min-width: 260px;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
  }

  ${(props) => props.inverted && invertedStyle}
`;

export default ButtonStyled;
