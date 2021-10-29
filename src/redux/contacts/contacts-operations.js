import axios from "axios";
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
} from "./contacts-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (description) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", description)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

const contactsOperations = { fetchContacts, addContact, deleteContact };

export default contactsOperations;
