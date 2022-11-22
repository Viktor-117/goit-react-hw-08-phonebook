import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  token: null,
  isLoggedIn: false,
};

const handleRecected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending]: handlePending,
    [authOperations.register.rejected]: handleRecected,
    [authOperations.login.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.pending]: handlePending,
    [authOperations.login.rejected]: handleRecected,
  },
});

export default authSlice.reducer;
