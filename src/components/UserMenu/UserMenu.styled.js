import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;

  :last-of-type {
    margin-left: 30px;
  }
`;

export const LogOutBtn = styled.button`
  height: 22px;
  padding: 2px 8px;
`;

export const Welcome = styled.p`
  font-weight: 700;
  /* ::before {
    content: '';
    background: url('./default-avatar.png');
    margin-right: 10px;
    width: 15px;
    display: block;
  } */
`;

export const Avatar = styled.img`
  display: block;
  margin-right: 8px;
`;
