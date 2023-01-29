import { createSelector } from '@reduxjs/toolkit';

export const contactSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [contactSelector, filterSelector],
  (contacts, filter) => {
    console.log(contacts, filter)
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  }
);
