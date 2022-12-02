import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { ListItemText, Text } from './ListItem.styled';

export default function ListItem({ contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItemText>
      <Text>
        {name}: {number}
      </Text>

      <IconButton
        aria-label="delete"
        color="error"
        type="button"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
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
