import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/slectors';
import { List } from './ContactList.styled';
import ListItem from 'components/ListItem';

const getVisibleContacts = (contacts, filter) => {
  // console.log(filter);
  // const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(filter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => {
        // console.log(contact);
        return <ListItem key={contact.id} contact={contact}></ListItem>;
      })}
    </List>
  );
}
