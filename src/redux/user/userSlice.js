import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  fetchCurrentUser,
  loginUser,
  logoutUser,
} from 'redux/services/createUser';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: null,
    userData: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: builder => 
    builder
    .addCase(createUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.userData = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })
    .addCase(createUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(loginUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.userData = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })
    .addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(fetchCurrentUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.userData = payload;
      state.isLoggedIn = true;
    })
    .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(logoutUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.userData = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(logoutUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
  ,
});


export const userReducer = userSlice.reducer;

export const selectUser = store => store.user.userData;
export const selectUserError = store => store.user.error;
export const selectIsLoggedIn = store => store.user.isLoggedIn;
export const selectToken = store => store.user.token;