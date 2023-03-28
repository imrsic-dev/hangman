import styled, { css } from 'styled-components';

const errorStyle = css`
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 85%;
    height: 4px; /* cross thickness */
    background-color: ${({ theme }) => theme.colors.darkRed};
  }

  &::before {
    transform: rotate(31deg);
  }

  &::after {
    transform: rotate(-33deg);
  }
`;

const successStyle = css`
  border: 3px solid ${(props) => props.theme.colors.turquoise};
  border-radius: 90% 65% 95% 70%;
`;

export const LetterStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => '28px' || theme.fontSize.l};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  min-width: ${({ minWidth }) => minWidth || null};
  min-height: ${({ minHeight }) => minHeight || null};
  line-height: ${({ lineHeight }) => lineHeight || null};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  ${({ status }) => {
    if (status === 'error') {
      return errorStyle;
    }
    if (status === 'success') {
      return successStyle;
    }
  }}
`;
