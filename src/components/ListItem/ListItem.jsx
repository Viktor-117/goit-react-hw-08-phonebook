import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { ListItemText, Button, Text } from './ListItem.styled';

export default function ListItem({ contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItemText>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </ListItemText>
  );
}

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
