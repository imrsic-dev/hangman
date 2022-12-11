import styled from "styled-components";

const FlexContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

export default FlexContainerStyled;
