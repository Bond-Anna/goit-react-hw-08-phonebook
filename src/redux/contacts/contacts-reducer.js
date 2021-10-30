import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';
import {
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  contactsFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSucces]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const adding = createReducer(false, {
  [fetchContactsRequest]: () => false,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const deleting = createReducer(false, {
  [fetchContactsRequest]: () => false,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [contactsFilter]: (state, action) => action.payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  adding,
  deleting,
  filter,
  error,
});
