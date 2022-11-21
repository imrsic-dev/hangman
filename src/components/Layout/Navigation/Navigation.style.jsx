import styled from "styled-components";
import { Link } from "react-router-dom";

//     filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));

const NavigationStyled = styled.div`
  display: flex;

  margin-top: 60px;
  background-color: transparent;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 30px;

  list-style: none;
`;

const NavigationListItem = styled.li`
  display: flex;

  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  color: #000747;
`;

const LinkStyled = styled(Link)`
  display: flex;
`;

export { NavigationStyled, NavigationList, NavigationListItem, LinkStyled };