import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">TodoApp</div>

        <div className="nav-links">
          {!token && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}

          {token && (
            <>
              <NavLink to="/todos">Todos</NavLink>
              <NavLink to="/admin/logs">Admin Logs</NavLink>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
