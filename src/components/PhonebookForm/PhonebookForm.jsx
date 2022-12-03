import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { useContacts } from 'hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from './PhonebookForm.styled';

let schema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .min(3, 'Name must be at least 3 characters long')
    .max(32, 'Name must be less than 32 characters long')
    .required('Name is required'),
  number: yup
    .number('Enter your phone number')
    .min(4, 'Phone number must be at least 4 characters long')
    .required('Phone number is required'),
});

export default function PhonebookForm() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const contactsNameCheck = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    contactsNameCheck(values.name)
      ? toast.error(`${values.name} is already in contacts!`)
      : dispatch(addContact(values));

    resetForm();
  };

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <Box
        onSubmit={formik.handleSubmit}
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
          id="name"
          name="name"
          label="Name"
          autoComplete="off"
          type="text"
          variant="outlined"
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          id="number"
          name="number"
          label="Phone Number"
          autoComplete="off"
          type="tel"
          variant="outlined"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
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
  );
}
