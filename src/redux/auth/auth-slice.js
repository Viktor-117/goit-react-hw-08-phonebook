import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshingUser: false,
};

const handleRejected = (state, action) => {
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
    [authOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      toast.error('Ooops, something went wrong. Please, Try again!');
    },
    [authOperations.login.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.pending]: handlePending,
    [authOperations.login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      toast.error('Email or password is wong. Please, Try again!');
    },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoading = false;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logout.pending]: handlePending,
    [authOperations.logout.rejected]: handleRejected,
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
      // toast.error('Ooops, something went wrong. Please, Try again!');
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
