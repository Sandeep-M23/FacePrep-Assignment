import React, { FC, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/Auth/AuthContext";

interface ProtectedRouteProps {
  user: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

const App: FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
