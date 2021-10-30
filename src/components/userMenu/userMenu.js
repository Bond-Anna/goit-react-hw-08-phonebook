import { useDispatch, useSelector } from "react-redux";
import { FaWeebly } from "react-icons/fa";
import { IconContext } from "react-icons";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import css from "./userMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className={css.userMenu}>
      <span className={css.userWelcome}>
        <IconContext.Provider
          value={{
            style: { verticalAlign: "middle" },
            size: 22,
          }}
        >
          <FaWeebly className={css.icon} />
        </IconContext.Provider>
        elcome, <span className={css.userName}>{name}</span>
      </span>
      <button
        type="button"
        className={css.userBtn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
