import { Link } from "react-router-dom";
import css from "./HomeView.module.css";

function HomeView() {
  return (
    <div className={css.home}>
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
    </div>
  );
}
export default HomeView;
