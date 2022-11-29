import { Box, Link, List, ListItem } from './AppBar.styled';
import useAuth from 'hooks/useAuth';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
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
