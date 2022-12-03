import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useContacts } from 'hooks';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      autoComplete="off"
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '380px',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <TextField
        id="filter"
        name="filter"
        label="Find contacts by name"
        type="text"
        variant="outlined"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
}
