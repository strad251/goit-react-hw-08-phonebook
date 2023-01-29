import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createUser = createAsyncThunk(
  'user/create',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    }
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/logout', user);
      token.unset();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);