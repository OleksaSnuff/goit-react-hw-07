import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts.length === 0) return [];
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  }
);
