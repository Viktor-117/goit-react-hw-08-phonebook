import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useContacts } from 'hooks';
import { LabelName, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <LabelName>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleChange}
      ></FilterInput>
    </LabelName>
  );
}
