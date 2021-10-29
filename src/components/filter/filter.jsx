import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import { contactsFilter } from "../../redux/contacts/contacts-actions";
import css from "./filter.module.css";

export default function Filter() {
  const dispatch = useDispatch;
  const value = useSelector(getFilter);
  const onChange = (event) =>
    dispatch(contactsFilter(event.currentTarget.value));
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  );
}
