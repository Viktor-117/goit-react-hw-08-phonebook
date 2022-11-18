import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   addContact: {
  //     reducer(state, action) {
  //       state.list.push(action.payload);
  //     },
  //     prepare({ name, number }) {
  //       return { payload: { id: nanoid(), name, number } };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.list.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.list.splice(index, 1);
  //   },
  // },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

export const contactsReducer = contactsSlice.reducer;

// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addContact,
//   refreshContacts,
//   deleteContact,
// } = contactsSlice.actions;
