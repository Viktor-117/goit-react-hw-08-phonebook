import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
