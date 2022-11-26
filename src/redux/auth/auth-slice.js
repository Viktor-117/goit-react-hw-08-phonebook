import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  token: null,
  isLoggedIn: false,
  error: null,
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
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoading = false;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logout.pending]: handlePending,
    [authOperations.logout.rejected]: handleRecected,
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
