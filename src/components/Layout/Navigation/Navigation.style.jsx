import styled from "styled-components";
import { Link } from "react-router-dom";

//     filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));

const NavigationStyled = styled.div`
  display: flex;

  margin-top: ${(props) => props.theme.spacings.margin.xxl};
  background-color: transparent;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 ${(props) => props.theme.spacings.padding.l};

  list-style: none;
`;

const NavigationListItem = styled.li`
  display: flex;
`;

const LinkStyled = styled(Link)`
  display: flex;
`;

const NavTextContainer = styled.div`
  font-size: ${(props) => props.theme.spacings.fontSize.xl};
  line-height: ${(props) => props.theme.spacings.lineHeight.xl};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.aladin};
`;

export {
  NavigationStyled,
  NavigationList,
  NavigationListItem,
  LinkStyled,
  NavTextContainer,
};
