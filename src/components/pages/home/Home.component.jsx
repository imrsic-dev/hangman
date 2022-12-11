import React from "react";
import { Container } from "./Home.style";
import PageContainer from "../../Layout/PageContainer/PageContainer.component";
import FlexContainer from "../../Layout/FlexContainer/FlexContainer.component";
import BodyStyled from "../../../style/GlobalBodyStyle";
import HangMan from "../../HangMan/HangMan.component";
import GameLevel from "../../GameLevel/GameLevel.component";
import UsernameForm from "../../UsernameForm/UsernameForm.component";
import mobileBackground from "../../../assets/Mobile_Bg.png";
import theme from "../../../style/theme";

const Home = () => {
  return (
    <>
      <BodyStyled backgroundImage={mobileBackground} />
      <PageContainer>
        <FlexContainer
          margin={`${theme.spacings.margin.xxl} 0 ${theme.spacings.margin.l}`}
        >
          <HangMan />
        </FlexContainer>
      </PageContainer>
      <Container>
        <GameLevel />
        <UsernameForm />
      </Container>
    </>
  );
};

export default Home;
