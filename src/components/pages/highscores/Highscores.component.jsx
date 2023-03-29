import React from 'react';
import BodyStyled from '../../../style/GlobalBodyStyle';
import theme from '../../../style/theme';

import { ImageContainer, Image } from './Highscores.style';
import PageContainer from '../../Layout/PageContainer/PageContainer.component';
import { H1 } from '../../Typography/Typography';
import CrownImage from '../../../assets/Highscore_Illustration_thinner.svg';

const Highscores = () => (
  <PageContainer>
    <BodyStyled backgroundColor={theme.colors.linen} />
    <ImageContainer>
      <Image src={CrownImage} alt="Crown image" />
    </ImageContainer>
    <H1
      textAlign="center"
      margin={`${theme.spacings.margin.m} 0 ${theme.spacings.margin.l} 0`}
    >
      Highscores
    </H1>
  </PageContainer>
);

export default Highscores;
