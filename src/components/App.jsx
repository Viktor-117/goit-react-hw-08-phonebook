import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getContacts } from 'redux/slectors';
import { refreshContacts } from 'redux/actions';
import 'react-toastify/dist/ReactToastify.css';
import PhonebookForm from './PhonebookForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container, Title } from './App.styled';

export function App() {
  const initialRender = useRef(true);

  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    console.log(localStorageContacts);
    if (initialRender.current && localStorageContacts) {
      dispatch(refreshContacts(localStorageContacts));
      initialRender.current = false;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const handleChange = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const contactsNameCheck = name => {
  //   const normalizedName = name.toLowerCase();
  //   return contacts.find(contact =>
  //     contact.name.toLowerCase().includes(normalizedName)
  //   );
  // };

  // const formSubmitHandler = data => {
  //   contactsNameCheck(data.name)
  //     ? toast.error(`${data.name} is already in contacts.`)
  //     : setContacts(prevState => [...prevState, data]);
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  return (
    <Container
      style={{
        position: 'relative',
        height: '100vh',
        width: 500,
        left: 300,
        marginTop: 50,
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Title>Phonebook</Title>
      <PhonebookForm></PhonebookForm>

      <Title>Contacts</Title>
      <Filter></Filter>
      {/* {contacts.length > 0 && ( */}
      <ContactList
      // contacts={getVisibleContacts()}
      // onDelete={deleteContact}
      ></ContactList>
      {/* )} */}
      <ToastContainer
        autoClose={3000}
        theme="colored"
        style={{ fontSize: '18px' }}
      />
    </Container>
  );
}
