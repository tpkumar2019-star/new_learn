import { useState } from "react";
import { Link } from "react-router-dom";
import "./FormPages.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setMessage({ type: "error", text: "Email and password are required." });
      return;
    }

    setMessage({ type: "success", text: "Login successful! (Demo only)" });
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="card form-card auth-card">
          <div className="form-header text-center">
            <h1>Welcome Back</h1>
            <p>Login to continue using BloodConnect.</p>
          </div>

          {message.text && (
            <p className={`form-message ${message.type}`}>{message.text}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                name="email"
                type="email"
                className="input-field"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                name="password"
                type="password"
                className="input-field"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>

          <p className="form-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
