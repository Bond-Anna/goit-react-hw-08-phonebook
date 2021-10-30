import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import css from "./contactItem.module.css";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
    toast.success(`Contact '${name} deleted'`);
  };
  return (
    <>
      <li key={id} className={css.contactItem}>
        <div className={css.contact}>
          <span className={css.marker}></span>
          <span className={css.contactName}>{name}:</span>
          <span className={css.contactNumber}>{number}</span>
        </div>
        <button type="button" onClick={onDelete} className={css.contactBtn}>
          Delete
        </button>
      </li>
    </>
  );
}
