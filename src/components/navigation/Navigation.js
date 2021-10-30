import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../userMenu/userMenu";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <div className={css.container}>
        <div>
          <NavLink
            exact
            to="/"
            className={css.link}
            activeClassName={css.activeLink}
          >
            <span className={css.linkText}>Home</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Phonebook
          </NavLink>
        </div>

        <div>{isLoggedIn && <UserMenu />}</div>
      </div>
    </nav>
  );
};
