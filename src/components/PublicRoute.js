import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import PropTypes from 'prop-types';

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

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  restricted: PropTypes.bool.isRequired,
};
