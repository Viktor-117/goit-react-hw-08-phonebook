import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    console.log('Hi');
    axios.defaults.headers.common.Authorization = '';
  },
};

console.log((axios.defaults.headers.common.Authorization = `Bearer ${token}`));

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { register, login, logout };

export default operations;
