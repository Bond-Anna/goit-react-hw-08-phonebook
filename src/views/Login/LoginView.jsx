import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};
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
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label style={styles.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
