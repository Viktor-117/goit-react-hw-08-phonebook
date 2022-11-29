import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import Layout from './Layout';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';

const HomeView = lazy(() => import('pages/HomeView'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));
const ContactsView = lazy(() => import('pages/ContactsView'));

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export function App() {
  const dispatch = useDispatch();
  const { isRefreshingUser } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Box>
      <RotatingLines strokeColor="#4fa94d" />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterView />}
            />
          }
        ></Route>
        <Route
          path={'/login'}
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginView />}
            />
          }
        ></Route>
        <Route
          path={'/contacts'}
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
}
