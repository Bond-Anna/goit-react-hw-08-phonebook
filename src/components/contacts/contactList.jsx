import { useSelector } from "react-redux";
import { filtredContacts } from "../../redux/contacts/contacts-selectors";
import ContactItem from "../contactItem/contactItem";
import css from "./contacts.module.css";

export default function ContactList() {
  const contacts = useSelector(filtredContacts);
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
