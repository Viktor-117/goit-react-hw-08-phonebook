import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), name, number },
  };
};

export const refreshContacts = contacts => {
  return { type: 'contacts/refreshContacts', payload: contacts };
};

export const deleteContact = contactId => {
  return { type: 'contacts/deleteContact', payload: contactId };
};

export const setFilter = filter => {
  return { type: 'filter/filterContacts', payload: filter };
};
