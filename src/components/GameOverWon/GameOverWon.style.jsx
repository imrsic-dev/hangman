import styled from 'styled-components';

import mobileBackground from '../../assets/Mobile_Bg.png';

export const GameOverWonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 330px;
  margin: 0 auto;

  color: ${({theme}) => theme.colors.blue};
  background-image: url(${mobileBackground});
  background-position: center;
  background-repeat: repeat;
`;

export const GameOverWonTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.aladin};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  text-align: center;
  margin: 36px 0 8px 0;
 
`;

export const GameOverWonScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GameOverWonScoreText = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 10px;
`;
export const GameOverWonScoreNumber = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
