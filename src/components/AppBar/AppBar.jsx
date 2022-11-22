import Navigation from './Navigation';
import { Header } from './AppBar.styled';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';

export default function AppBar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
}
