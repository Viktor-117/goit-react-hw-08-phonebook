import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/slectors';
import { List } from './ContactList.styled';
import ListItem from 'components/ListItem';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => {
        return <ListItem key={contact.id} contact={contact}></ListItem>;
      })}
    </List>
  );
}
