import { NavLink } from "react-router-dom";
import { useAuth } from "../modules/context/AuthContext"

function Landing() {
  const { user, _ } = useAuth();

  if (user) {
    location.href = "/dashboard";
  }
  return (
    <>
      <nav className="hero-nav">
        <NavLink
          to="/login"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Login
        </NavLink>
      </nav>
      <header className="hero">
        <h1>
          Task Nexus <br />
        </h1>
        <h2> Plan. Track. Nexus</h2>
      </header>
    </>
  );
}

export default Landing;
