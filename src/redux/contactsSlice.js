import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactsInitialState, isLoading: false, error: null },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload
      );
      state.list.splice(index, 1);
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

export const contactsReducer = contactsSlice.reducer;

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  refreshContacts,
  deleteContact,
} = contactsSlice.actions;
