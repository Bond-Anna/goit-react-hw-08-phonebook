import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoading,
  getContacts,
} from "../redux/contacts/contacts-selectors";
import authSelectors from "../redux/auth/auth-selectors";
import contactsOperations from "../redux/contacts/contacts-operations";
import Form from "./form/form";
import Filter from "./filter/filter";
import ContactList from "./contacts/contactList";
import { Login } from "../views/Login/LoginView";
import { Spinner } from "./spiner";

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(contacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1 className="title">Phonebook</h1>
          <Form />
          <h2 className="title">Contacts</h2>
          {contacts && contacts.lengs !== 0 && <Filter />}
          {isLoading && <Spinner />}
          {contacts && <ContactList />}
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
