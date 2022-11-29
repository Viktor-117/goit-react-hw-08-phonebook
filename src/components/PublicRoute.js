import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import PropTypes from 'prop-types';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  restricted: PropTypes.bool.isRequired,
};
