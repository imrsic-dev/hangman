import BodyStyled from "../../../style/GlobalBodyStyle";
import theme from "../../../style/theme";

import { ImageContainer, Image, ListContainer } from "./HowToPlay.style";
import PageContainer from "../../Layout/PageContainer/PageContainer.component";
import FlexContainer from "../../Layout/FlexContainer/FlexContainer.component";
import { H1, P, Ul } from "../../Typography/Typography";
import { HOW_TO_PLAY_LIST_ITEMS } from "../../../constants";
import GuyImage from "../../../assets/How-to-play.svg";

const HowToPlay = () => (
  <PageContainer>
    <BodyStyled backgroundColor={theme.colors.linen} />
    <ImageContainer>
      <Image src={GuyImage} alt="Guy image" />
    </ImageContainer>
    <H1
      textAlign="center"
      margin={`${theme.spacings.margin.m} 0 ${theme.spacings.margin.l} 0`}
    >
      How to play?
    </H1>
    <FlexContainer>
      <P fontWeight={theme.fontWeight.black} flexBasis="265px">
        The goal of the game is to try to guess the word one letter at a time!
      </P>
    </FlexContainer>

    <ListContainer>
      <P fontWeight={theme.fontWeight.bold}>
        You have 3 levels to choose from:
      </P>
      <Ul>
        {HOW_TO_PLAY_LIST_ITEMS.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </Ul>
    </ListContainer>
  </PageContainer>
);

export default HowToPlay;
