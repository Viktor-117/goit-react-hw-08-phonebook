import { Box, Link, List, ListItem } from './AppBar.styled';
import useAuth from 'hooks/useAuth';
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box>
      <List>
        <ListItem>
          <Link to={'/'}>Home</Link>
        </ListItem>
        <ListItem>
          {isLoggedIn && <Link to={'contacts'}>Phonebook</Link>}
        </ListItem>
      </List>
    </Box>
  );
}
