import styled from 'styled-components';

const FormStyled = styled.form`
  padding: ${(props) => props.theme.spacings.padding.m};
`;

const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.blue};
  line-height: ${(props) => props.theme.spacings.lineHeight.l};
  margin-bottom: ${(props) => props.theme.spacings.margin.xs};
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.fontSize.l};
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.blue};
  background-color: inherit;
  outline: none;
`;

const FormErrorMessage = styled.span`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: ${(props) => props.theme.fontWeight.regular};

  color: ${(props) =>
    props.isError ? props.theme.colors.red : props.theme.colors.blue};

  margin: ${(props) => props.theme.spacings.margin.s} 0 24px 0;
`;

export { FormStyled, Label, Input, FormErrorMessage };
