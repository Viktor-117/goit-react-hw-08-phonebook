import { Box, Link, List, ListItem } from './AppBar.styled';

export default function Navigation() {
  return (
    <Box>
      <Link to={'/'}>Home</Link>

      <List>
        <ListItem>
          <Link to={'register'}>Register</Link>
        </ListItem>
        <ListItem>
          <Link to={'login'}>LogIn</Link>
        </ListItem>
      </List>
    </Box>
  );
}
