import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, LogOutBtn, Welcome, Avatar } from './UserMenu.styled';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  return (
    <List>
      <ListItem>
        <Avatar src={defaultAvatar} alt="avatar" width="20"></Avatar>
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
