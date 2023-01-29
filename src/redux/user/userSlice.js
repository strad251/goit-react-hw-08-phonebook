import { createSlice } from '@reduxjs/toolkit';
import { createUser, fetchCurrentUser, loginUser, logoutUser } from './operations';


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
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userData = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userData = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userData = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(logoutUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.userData = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;

