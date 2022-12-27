import styled from "styled-components";

const Container = styled.div`
  flex-flow: column;
  height: 100%;
  display: flex;
  border-radius: 25px 25px 0px 0px;
  background-color: ${(props) => props.theme.colors.linen};
  padding: ${(props) => props.theme.spacings.padding.xxl}
    ${(props) => props.theme.spacings.padding.xxl} 0;
  margin-top: ${(props) => props.theme.spacings.padding.l};
`;

export { Container };
