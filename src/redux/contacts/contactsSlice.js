import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "redux/services/getContacts";


const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => 
    builder 
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items]
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher( isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
      state => {
      state.isLoading = true;
      })
      .addMatcher(
      isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), 
      state => { 
        state.isLoading = false;
          state.error = null;
        })
      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
              (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;