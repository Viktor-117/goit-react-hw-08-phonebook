import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from 'redux/auth';
// import useAuth from 'hooks';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
