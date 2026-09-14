import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">🩸 BloodConnect</h3>
          <p className="footer-desc">
            Connecting blood donors with those in need. A simple platform to
            save lives together.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blood-request">Request Blood</Link>
            </li>
            <li>
              <Link to="/donor-registration">Register as Donor</Link>
            </li>
            <li>
              <Link to="/matching-donors">Find Donors</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms of Service</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>&copy; {currentYear} BloodConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
