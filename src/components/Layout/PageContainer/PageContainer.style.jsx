import styled from 'styled-components';

const PageContainerStyled = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 ${(props) => props.theme.spacings.padding.l};
`;

export default PageContainerStyled;
