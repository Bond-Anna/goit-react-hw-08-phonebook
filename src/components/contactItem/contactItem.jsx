import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { getIsLoading } from "../../redux/contacts/contacts-selectors";
import css from "./contactItem.module.css";

export default function ContactItem({ id, name, number }) {
  const isDeleting = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <>
      <li key={id} className={css.contactItem}>
        <div className={css.contact}>
          <span className={css.marker}></span>
          <span className={css.contactName}>{name}:</span>
          <span className={css.contactNumber}>{number}</span>
        </div>
        <button
          type="button"
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
          className={css.contactBtn}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </li>
    </>
  );
}
