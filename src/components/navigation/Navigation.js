import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../userMenu/userMenu";
// import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav
    //   className={css.navigation}
    >
      <NavLink
        exact
        to="/"
        // className={css.link}
        // activeClassName={css.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        //   className={css.link}
        // activeClassName={css.activeLink}
      >
        Phonebook
      </NavLink>

      <div>{isLoggedIn && <UserMenu />}</div>
    </nav>
  );
};
