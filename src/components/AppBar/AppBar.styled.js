import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 20px;
  padding: 20px 30px;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.45);
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  cursor: pointer;

  &.active {
    color: #e84a5f;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;

  :last-of-type {
    margin-left: 30px;
  }
`;
