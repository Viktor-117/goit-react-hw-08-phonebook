import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;

  :last-of-type {
    margin-left: 30px;
  }
`;

export const LogOutBtn = styled.button`
  padding: 4px 8px;
`;

export const Welcome = styled.p`
  font-weight: 700;
  ::before {
    content: '';
  }
`;
