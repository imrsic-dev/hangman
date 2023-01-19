import styled, { css } from 'styled-components';

const errorStyle = css`
  color: red;
`;

const successStyle = css`
  color: green;
`;

export const LetterStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => '28px' || theme.fontSize.l};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
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
