import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
// import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
