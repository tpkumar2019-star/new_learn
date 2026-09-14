import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="container flex justify-between items-center navbar-container">
        <Link to="/" className="navbar-brand flex items-center">
          <span className="brand-icon">🩸</span>
          <h2>BloodConnect</h2>
        </Link>
        <nav className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/blood-request" className="nav-link">
            Request Blood
          </Link>
          <Link to="/donor-registration" className="nav-link">
            Become Donor
          </Link>
          <Link to="/matching-donors" className="nav-link">
            Find Donors
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </nav>
        <div className="navbar-actions">
          <Link to="/login" className="btn btn-outline mr-sm">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
