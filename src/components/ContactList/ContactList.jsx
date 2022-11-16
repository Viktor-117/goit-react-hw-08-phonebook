import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/slectors';
import { List } from './ContactList.styled';
import ListItem from 'components/ListItem';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(items, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <RotatingLines strokeColor="#4fa94d"></RotatingLines>}
      {error && <p>{error}</p>}
      {items.length > 0 && (
        <List>
          {visibleContacts.map(contact => {
            return <ListItem key={contact.id} contact={contact}></ListItem>;
          })}
        </List>
      )}
    </div>
  );
}
