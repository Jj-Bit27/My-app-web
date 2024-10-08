import { Route, Routes } from "react-router-dom";
import { useAuth } from "./libs/userAuth.js";
import { useEffect } from "react";

// Importamos las paginas que vamos a utilizar
import Landing from "./pages/Landing.jsx"; // Pagina de inicio de la aplicacion
import NotFound from "./pages/404.jsx"; // Pagina de error 404
import Login from "./pages/Login.jsx"; // Pagina de inicio de sesion
import Register from "./pages/Signup.jsx"; // Pagina de registro
import Home from "./pages/Home.jsx"; // Pagina principal
import EmailVerification from "./pages/EmailVerification.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

// Proteger las rutas, esto require que el usuario este autenticado
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/auth/verify-email" replace />;
  }

  return children;
};

// Redireccionar a los usuarios autenticados a la pagina de inicio
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  /*const { isCheckingAuth, checkAuth } = useAuth();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;*/

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/post" element={<Post />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/profile/settings" element={<Settings />} /> */}
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route
          path="/auth/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <RedirectAuthenticatedUser>
              <Register />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/auth/verify-email" element={<EmailVerification />} />
        <Route
          path="/auth/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/auth/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
