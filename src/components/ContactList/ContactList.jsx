import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/slectors';
import { List } from './ContactList.styled';
import ListItem from 'components/ListItem';

// const getVisibleContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export default function ContactList() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const { items, isLoading, error } = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);
  // const visibleContacts = getVisibleContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error && toast.error('Ooops, something went wrong. Please, try again')}
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => {
            return <ListItem key={contact.id} contact={contact}></ListItem>;
          })}
        </List>
      )}
      {isLoading && <RotatingLines strokeColor="#4fa94d"></RotatingLines>}
    </div>
  );
}
