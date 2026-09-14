import { useState } from "react";
import { Link } from "react-router-dom";
import "./FormPages.css";

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = [
      form.fullName,
      form.email,
      form.phone,
      form.password,
      form.confirmPassword,
    ];

    if (fields.some((field) => !field.trim())) {
      setMessage({ type: "error", text: "Please complete all fields." });
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage({
        type: "error",
        text: "Password and Confirm Password must match.",
      });
      return;
    }

    setMessage({
      type: "success",
      text: "Account created successfully! (Demo only)",
    });
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="card form-card">
          <div className="form-header text-center">
            <h1>Create Your Account</h1>
            <p>Join the BloodConnect community.</p>
          </div>

          {message.text && (
            <p className={`form-message ${message.type}`}>{message.text}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field full-width">
                <label htmlFor="signup-name">Full Name</label>
                <input
                  id="signup-name"
                  name="fullName"
                  type="text"
                  className="input-field"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  className="input-field"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="signup-phone">Phone Number</label>
                <input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  className="input-field"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-field">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  className="input-field"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                />
              </div>

              <div className="form-field">
                <label htmlFor="signup-confirm-password">
                  Confirm Password
                </label>
                <input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type="password"
                  className="input-field"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>

          <p className="form-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
