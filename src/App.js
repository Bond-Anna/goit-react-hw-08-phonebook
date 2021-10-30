import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./components/navigation/Navigation";
import { Phonebook } from "./components/Phonebook/Phonebook";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

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
  const isRefreshing = useSelector(authSelectors.getIsRefrshing);
  console.log("app: ", isRefreshing);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    !isRefreshing && (
      <div>
        <Navigation />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <Phonebook />
            </PrivateRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
          </Switch>
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    )
  );
};
