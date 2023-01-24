import React from 'react';
import styled, { css } from 'styled-components';

const checkedStyle = css`
  border: 3px solid ${(props) => props.theme.colors.turquoise};
  border-radius: 90% 65% 95% 70%;
`;

const GameLevelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacings.margin.xl};

  cursor: pointer;
`;

const GameLevelItem = React.memo(
  styled((props) => {
    return (
      <span className={props.className} onClick={props.onClick}>
        {props.children}
      </span>
    );
  })`
    font-family: ${(props) => props.theme.fonts.lato};
    font-size: ${(props) => props.theme.fontSize.l};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.blue};

    padding: 10px;
    border: 3px solid transparent;

    ${(props) => (props.checked ? checkedStyle : null)}
  `,
  (prevProps, nextProps) => {
    // specify which props to compare for performance optimization
    return (
      prevProps.borderColor === nextProps.borderColor &&
      prevProps.checked === nextProps.checked
    );
  }
);
GameLevelItem.displayName = 'GameLevelItem';

export { GameLevelStyled, GameLevelItem };
