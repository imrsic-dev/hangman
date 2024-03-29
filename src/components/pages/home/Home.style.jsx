import styled, { css } from 'styled-components';

const paddingStyle = css`
  ${(props) =>
    props.padding ||
    `${props.theme.spacings.padding.xxl} ${props.theme.spacings.padding.xxxl} 0`}
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  border-radius: 25px 25px 0px 0px;
  background-color: ${(props) => props.theme.colors.linen};
  padding: ${paddingStyle};
  margin-top: ${(props) => props.theme.spacings.padding.l};
`;

export { Container };
