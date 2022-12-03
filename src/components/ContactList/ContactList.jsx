import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { useContacts } from 'hooks';
import { List, Box } from './ContactList.styled';
import ListItem from 'components/ListItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const { isLoading, error, visibleContacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {error && toast.error('Ooops, something went wrong. Please, try again')}
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => {
            return <ListItem key={contact.id} contact={contact}></ListItem>;
          })}
        </List>
      )}
      {isLoading && <RotatingLines strokeColor="#4fa94d"></RotatingLines>}
    </Box>
  );
}
