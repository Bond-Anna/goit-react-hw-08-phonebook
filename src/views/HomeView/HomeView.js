import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import css from "./HomeView.module.css";

function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.home}>
      {isLoggedIn ? (
        <h2 className={css.registredTitle}>
          Hello, <span className={css.name}>{name}</span> ! Check your Pnonebook
        </h2>
      ) : (
        <>
          <h1 className={css.title}>Welcome</h1>
          <div className={css.links}>
            <Link
              to="/register"
              className={css.registerLink}
              activeClassName={css.activeLink}
            >
              <button className={css.link}>Register</button>
            </Link>
            <Link
              to="/login"
              className={css.loginLink}
              activeClassName={css.activeLink}
            >
              <button className={css.link}>Login</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
export default HomeView;
