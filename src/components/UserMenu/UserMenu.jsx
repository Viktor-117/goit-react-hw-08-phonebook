import { List, ListItem, LogOutBtn, Welcome } from './UserMenu.styled';
import authSelectors from 'redux/auth/auth-selectors';

export default function UserMenu() {
  return (
    <List>
      <ListItem>
        <Welcome>Welcome {authSelectors.name}</Welcome>
      </ListItem>
      <ListItem>
        <LogOutBtn type="button">Logout</LogOutBtn>
      </ListItem>
    </List>
  );
}
