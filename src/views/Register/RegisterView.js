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
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
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
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
