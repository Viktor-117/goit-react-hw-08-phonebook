import { useSelector } from 'react-redux';
import contactSelectors from 'redux/slectors';

export default function useContacts() {
  const contacts = useSelector(contactSelectors.selectContacts);
  const isLoading = useSelector(contactSelectors.selectIsLoading);
  const error = useSelector(contactSelectors.selectError);
  const filter = useSelector(contactSelectors.selectFilter);
  const visibleContacts = useSelector(contactSelectors.selectVisibleContacts);

  return { contacts, isLoading, error, filter, visibleContacts };
}
