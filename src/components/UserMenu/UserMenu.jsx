import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, LogOutBtn, Welcome } from './UserMenu.styled';
import authSelectors from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  return (
    <List>
      <ListItem>
        <Welcome>Welcome {user.name}</Welcome>
      </ListItem>
      <ListItem>
        <LogOutBtn
          type="button"
          onClick={() => dispatch(authOperations.logout())}
        >
          Logout
        </LogOutBtn>
      </ListItem>
    </List>
  );
}
