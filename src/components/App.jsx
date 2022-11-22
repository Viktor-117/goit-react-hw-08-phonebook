import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import PublicRoute from './PublicRoute';
import PhonebookForm from './PhonebookForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import RegisterView from 'pages/RegisterView';
import { Container, Title } from './App.styled';

const HomeView = lazy(() => import('pages/HomeView'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />}>
          {/* // {<PublicRoute component={<HomeView />} />}> */}
        </Route>
        <Route path={'register'} element={<RegisterView />}></Route>
        <Route path={'login'} element={<LoginView />}></Route>
      </Route>
    </Routes>
  );
  // return (
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
  // );
}
