import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhonebookForm from './PhonebookForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container, Title } from './App.styled';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <PhonebookForm></PhonebookForm>

      <Title>Contacts</Title>
      <Filter></Filter>
      <ContactList></ContactList>
      <ToastContainer
        autoClose={3000}
        theme="colored"
        style={{ fontSize: '18px' }}
      />
    </Container>
  );
}
