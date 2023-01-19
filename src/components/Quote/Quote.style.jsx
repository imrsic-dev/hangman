import styled from 'styled-components';

export const QuoteStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 5px;
`;

export const QuoteLetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 37px;
`;

export const QuoteLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ borderBottom }) => (borderBottom ? 'center' : 'flex-end')};
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  min-width: 18px;
  height: 100%;
  ${({ borderBottom, theme }) =>
    borderBottom ? 'border-bottom: 3px solid ' + theme.colors.blue : null}
`;
