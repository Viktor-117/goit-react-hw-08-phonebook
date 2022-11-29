import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
  restricted = false,
  component: Component,
  redirectTo = '/',
}) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { isLoggedIn, isRefreshing } = useAuth();
  //   const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
