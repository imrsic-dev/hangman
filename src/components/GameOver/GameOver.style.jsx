import styled from 'styled-components';

import mobileBackground from '../../assets/Mobile_Bg.png';

export const GameOverWonStyled = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${mobileBackground});
  background-position: center;
  background-repeat: repeat;
`;

export const GameOverWonTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.aladin};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  text-align: center;
`;

export const GameOverWonScore = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GameOverWonScoreText = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
export const GameOverWonScoreNumber = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
