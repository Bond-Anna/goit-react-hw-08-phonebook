import { Link } from "react-router-dom";
function HomeView() {
  return (
    <>
      <h1>Welcome</h1>
      <Link
        to="/register"
        // className={css.link}
        // activeClassName={css.activeLink}
      >
        <button>Register</button>
      </Link>
      <Link
        to="/login"
        // className={css.link}
        // activeClassName={css.activeLink}
      >
        <button>Login</button>
      </Link>
    </>
  );
}
export default HomeView;
