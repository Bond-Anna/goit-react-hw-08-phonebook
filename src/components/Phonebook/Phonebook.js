import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoading,
  getContacts,
} from "../../redux/contacts/contacts-selectors";
import contactsOperations from "../../redux/contacts/contacts-operations";
import Form from "../form/form";
import Filter from "../filter/filter";
import ContactList from "../contacts/contactList";
import { Spinner } from "../spiner";
import css from "./Phonebook.module.css";

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={css.phonebook}>
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      {contacts && contacts.lengs !== 0 && <Filter />}
      {isLoading && <Spinner />}
      {contacts && <ContactList />}
    </div>
  );
};
