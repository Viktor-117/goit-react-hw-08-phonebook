import { List, ListItem, Link } from './AppBar.styled';

export default function AuthNav() {
  return (
    <List>
      <ListItem>
        <Link to={'register'}>Register</Link>
      </ListItem>
      <ListItem>
        <Link to={'login'}>LogIn</Link>
      </ListItem>
    </List>
  );
}
