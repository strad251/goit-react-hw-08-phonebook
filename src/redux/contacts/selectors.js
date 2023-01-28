import { createSelector } from '@reduxjs/toolkit';

export const contactSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;

export const selectFilteredContacts = createSelector(
  [contactSelector, filterSelector],
  (contacts, filter) => {
    console.log(contacts, filter)
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  }
);
