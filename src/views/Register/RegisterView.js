import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import css from "../../components/form/form.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
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
    dispatch(authOperations.register({ name, email, password }));

    reset();
  };
  const reset = () => {
    setName("");
    setEmail("");
    setPasssword("");
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.labelField}>
          <span className={css.label}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            className={css.input}
          />
        </label>
        <label className={css.labelField}>
          <span className={css.label}>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
