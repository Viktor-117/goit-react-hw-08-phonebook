import Navigation from './Navigation';
import { Header } from './AppBar.styled';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { useAuth } from 'hooks';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
