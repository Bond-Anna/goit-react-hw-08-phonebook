import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Phonebook } from "./components/Phonebook";
import authOperations from "./redux/auth/auth-operations";
// import Login from './views/Login/LoginView';

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import(
    "./views/Register/RegisterView" /* webpackChunkName: "register-view" */
  )
);
const LoginView = lazy(() =>
  import("./views/Login/LoginView" /* webpackChunkName: "login-view" */)
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/contacts">
            <Phonebook />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
