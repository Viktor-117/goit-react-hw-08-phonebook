import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/slectors';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  LabelName,
  NameInput,
  Button,
  Error,
} from './PhonebookForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(4).required(),
});

export default function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactsNameCheck = name => {
    // console.log(name);
    const normalizedName = name.toLowerCase();
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    contactsNameCheck(values.name)
      ? toast.error(`${values.name} is already in contacts!`)
      : dispatch(addContact(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContainer autoComplete="off">
        <LabelName>
          Name
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="name" component="div" />
        </LabelName>
        <LabelName>
          Number
          <NameInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error name="number" component="div" />
        </LabelName>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
}
