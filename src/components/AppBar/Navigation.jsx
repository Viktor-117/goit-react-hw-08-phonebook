import { Box, Link } from './AppBar.styled';

export default function Navigation() {
  return (
    <Box>
      <Link to={'/'}>Home</Link>
      <Link to={'contacts'}>Phonebook</Link>
    </Box>
  );
}
