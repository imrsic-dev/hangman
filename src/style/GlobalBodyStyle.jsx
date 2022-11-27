import { css, createGlobalStyle } from "styled-components";

const BodyStyled = createGlobalStyle`
  body {
    ${(props) =>
      props.backgroundColor
        ? css`
            background-color: ${props.backgroundColor};
          `
        : null};
    ${(props) =>
      props.backgroundImage
        ? css`
            background-image: url(${props.backgroundImage});
            background-position: center;
            background-repeat: repeat;
          `
        : null};
  }`;

export default BodyStyled;
