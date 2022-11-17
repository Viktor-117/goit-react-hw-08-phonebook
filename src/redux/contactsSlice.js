import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
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
