import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import css from "../../components/form/form.module.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPasssword(e.target.value);
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    reset();
  };
  const reset = () => {
    setEmail("");
    setPasssword("");
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.labelField}>
          <span className={css.label}>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.labelField}>
          <span className={css.label}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
