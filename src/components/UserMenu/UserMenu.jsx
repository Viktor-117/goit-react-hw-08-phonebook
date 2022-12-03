import { useDispatch } from 'react-redux';
import { List, ListItem, Welcome } from './UserMenu.styled';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useAuth } from 'hooks';
import defaultAvatar from './default-avatar.png';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <List>
      <ListItem>
        <Avatar
          src={defaultAvatar}
          sx={{ width: 22, height: 22, marginRight: '8px' }}
        ></Avatar>
        <Welcome>Welcome {user.name}</Welcome>
      </ListItem>
      <ListItem>
        <Button
          type="button"
          onClick={() => dispatch(authOperations.logout())}
          size="small"
          variant="contained"
        >
          Logout
        </Button>
      </ListItem>
    </List>
  );
}
