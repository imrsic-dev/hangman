import styled from 'styled-components';
import theme from '../../../style/theme';

const ImageContainer = styled.div`
  display: flex;
  flex: 0 1 240px;

  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 211px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacings.padding.m};
`;

export { ImageContainer, Image, ListContainer };
