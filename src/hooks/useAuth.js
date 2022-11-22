import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export default function useAuth() {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return { user, isLoggedIn };
}
