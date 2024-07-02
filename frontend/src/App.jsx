import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { Toaster } from "react-hot-toast";
import { userAuthContext } from "./context/AuthContext";

function App() {
  const { auth } = userAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={auth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={auth ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
