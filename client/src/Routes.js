import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Account from "./pages/Account";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignupForm";
import EditForm from "./auth/EditForm";
import Dark from "./pages/Dark";
import LBD from "./pages/LBD";
import MikeDean from "./pages/MikeDean";
import GM from "./pages/GM-Manual";

function WebRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const res = await fetch("/authentication/verify", {
          method: "POST",
          headers: { jwt_token: localStorage.token },
        });

        const parseRes = await res.json();

        setIsAuthenticated(parseRes === true);
      } catch (err) {
        console.error(err.message);
      }
    };

    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const PrivateRoute = ({ element: Element, redirectTo, ...rest }) => {
    return isAuthenticated ? (
      <Element {...rest} setAuth={setAuth} />
    ) : (
      <Navigate to={redirectTo} replace />
    );
  };

  const AuthLogin = ({ setAuth }) => {
    return isAuthenticated ? (
      <Navigate to="/account" replace />
    ) : (
      <LoginForm setAuth={setAuth} />
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/create" element={<Create />} />
      <Route path="/signup" element={<SignUpForm setAuth={setAuth} />} />
      <Route path="/login" element={<AuthLogin setAuth={setAuth} />} />
      <Route
        path="/account"
        element={<PrivateRoute element={Account} redirectTo="/login" />}
      />
      <Route
        path="/account/:id"
        element={<PrivateRoute element={EditForm} redirectTo="/login" />}
      />
      <Route
        path="/templates/dark/:id"
        element={<PrivateRoute element={Dark} redirectTo="/signup" />}
      />
      <Route
        path="/templates/lbd/:id"
        element={<PrivateRoute element={LBD} redirectTo="/signup" />}
      />
      <Route
        path="/templates/gm/:id"
        element={<PrivateRoute element={GM} redirectTo="/signup" />}
      />
      <Route
        path="/templates/mikedean/:id"
        element={<PrivateRoute element={MikeDean} redirectTo="/signup" />}
      />
    </Routes>
  );
}

export default WebRoutes;
