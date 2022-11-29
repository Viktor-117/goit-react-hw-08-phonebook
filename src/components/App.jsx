import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import Layout from './Layout';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import useAuth from 'hooks/useAuth';
import PhonebookForm from './PhonebookForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import RegisterView from 'pages/RegisterView';

const HomeView = lazy(() => import('pages/HomeView'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));
const ContactsView = lazy(() => import('pages/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshingUser } = useAuth();
  // const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <RotatingLines strokeColor="#4fa94d" />
  ) : (
    <Suspense fallback={<RotatingLines strokeColor="#4fa94d" />}>
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
          {/* <PublicRoute index>
          <HomeView />
        </PublicRoute>

        <PublicRoute path={'/register'} restricted>
          <RegisterView />
        </PublicRoute>

        <PublicRoute path={'/login'} restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path={'contacts'}>
          <ContactsView />
        </PrivateRoute> */}
        </Route>
      </Routes>
    </Suspense>
  );

  {
    /* // return (
  //   <Container>
  //     <Title>Phonebook</Title>
  //     <PhonebookForm></PhonebookForm>

  //     <Title>Contacts</Title>
  //     <Filter></Filter>
  //     <ContactList></ContactList>
  //     <ToastContainer
  //       autoClose={3000}
  //       theme="colored"
  //       style={{ fontSize: '18px' }}
  //     />
  //   </Container>
  // ); */
  }
}
