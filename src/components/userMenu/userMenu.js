import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
