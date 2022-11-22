import { Container, Title } from './ContactsView.styled';
import PhonebookForm from 'components/PhonebookForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function ContactsView() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <PhonebookForm></PhonebookForm>

      <Title>Contacts</Title>
      <Filter></Filter>
      <ContactList></ContactList>
    </Container>
  );
}
