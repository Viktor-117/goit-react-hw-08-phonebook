import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { useContacts } from 'hooks';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  // FormContainer,
  // LabelName,
  // NameInput,
  // Error,
  Container,
} from './PhonebookForm.styled';

export default function PhonebookForm() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const contactsNameCheck = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  const handleSubmit = e => {
    // console.log(e.target.elements.name.value);
    const { name, number } = e.target.elements;
    e.preventDefault();
    contactsNameCheck(name.value)
      ? toast.error(`${name.value} is already in contacts!`)
      : dispatch(addContact({ name: name.value, number: number.value }));
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Box
        onSubmit={handleSubmit}
        autoComplete="off"
        component="form"
        noValidate
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
          // error="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          id="name"
          name="name"
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={handleChange}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          margin="normal"
        />
        <TextField
          // error
          id="number"
          name="number"
          label="Phone Number"
          type="tel"
          variant="outlined"
          value={number}
          onChange={handleChange}
          inputProps={{
            autoComplete: 'off',
            inputMode: 'numeric',
            pattern: 'tel',
          }}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          margin="normal"
        />
        <Box
          sx={{
            '& > :not(style)': {
              marginTop: '16px',
              width: '150px',
            },
          }}
        >
          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </Box>
      </Box>
    </Container>
    // <Formik
    //   initialValues={{ name: '', number: '' }}
    //   onSubmit={handleSubmit}
    //   validationSchema={schema}
    // >
    //   <FormContainer autoComplete="off">
    //     <LabelName>
    //       Name
    //       <NameInput
    //         type="text"
    //         name="name"
    //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //       />
    //       <Error name="name" component="div" />
    //     </LabelName>
    //     <LabelName>
    //       Number
    //       <NameInput
    //         type="tel"
    //         name="number"
    //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //         required
    //       />
    //       <Error name="number" component="div" />
    //     </LabelName>
    //     <Button type="submit" variant="contained">
    //       Add contact
    //     </Button>
    //   </FormContainer>
    // </Formik>
  );
}
