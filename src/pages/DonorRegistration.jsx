import { useState } from "react";
import "./FormPages.css";

const initialForm = {
  fullName: "",
  age: "",
  gender: "",
  bloodGroup: "",
  city: "",
  location: "",
  phone: "",
  email: "",
  availability: "",
  lastDonationDate: "",
  notes: "",
};

function DonorRegistration() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = [
      form.fullName,
      form.age,
      form.gender,
      form.bloodGroup,
      form.city,
      form.location,
      form.phone,
      form.email,
      form.availability,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setMessage({
        type: "error",
        text: "Please complete all required fields.",
      });
      return;
    }

    setMessage({
      type: "success",
      text: "Donor registration submitted successfully! (Demo only)",
    });
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="card form-card">
          <div className="form-header text-center">
            <h1>Become a Blood Donor</h1>
            <p>
              Share your details to help connect patients with willing donors.
            </p>
          </div>

          {message.text && (
            <p className={`form-message ${message.type}`}>{message.text}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="donor-name">Full Name</label>
                <input
                  id="donor-name"
                  name="fullName"
                  type="text"
                  className="input-field"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-age">Age</label>
                <input
                  id="donor-age"
                  name="age"
                  type="number"
                  min="1"
                  className="input-field"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-gender">Gender</label>
                <select
                  id="donor-gender"
                  name="gender"
                  className="input-field"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="donor-blood-group">Blood Group</label>
                <select
                  id="donor-blood-group"
                  name="bloodGroup"
                  className="input-field"
                  value={form.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                    (group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="donor-city">City</label>
                <input
                  id="donor-city"
                  name="city"
                  type="text"
                  className="input-field"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-location">Area / Location</label>
                <input
                  id="donor-location"
                  name="location"
                  type="text"
                  className="input-field"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter your area or location"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-phone">Phone Number</label>
                <input
                  id="donor-phone"
                  name="phone"
                  type="tel"
                  className="input-field"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-email">Email</label>
                <input
                  id="donor-email"
                  name="email"
                  type="email"
                  className="input-field"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="donor-availability">Availability</label>
                <select
                  id="donor-availability"
                  name="availability"
                  className="input-field"
                  value={form.availability}
                  onChange={handleChange}
                >
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="donor-last-donation">
                  Last Donation Date (Optional)
                </label>
                <input
                  id="donor-last-donation"
                  name="lastDonationDate"
                  type="date"
                  className="input-field"
                  value={form.lastDonationDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="donor-notes">Additional Notes (Optional)</label>
                <textarea
                  id="donor-notes"
                  name="notes"
                  className="input-field"
                  rows="4"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Add any helpful notes"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonorRegistration;
