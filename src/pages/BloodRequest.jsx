import { useState } from "react";
import "./BloodRequest.css";

/**
 * BloodRequest Component
 * 
 * 1. What it does: Allows users to submit a new blood request via a form.
 * 2. How `useState` manages the form: It stores the values of all form inputs in a single state object, updating it on change. It also manages success/error states.
 * 3. How form submission works: It prevents the default page reload, checks if required fields are filled, and either shows an error or a success message while resetting the form.
 */
function BloodRequest() {
  const initialFormState = {
    patientName: "",
    bloodGroup: "",
    units: "",
    location: "",
    contactNumber: "",
    requiredDate: "",
    urgency: "Normal",
    notes: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.patientName || !formData.bloodGroup || !formData.units || !formData.location || !formData.contactNumber) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields."
      });
      return;
    }

    // Success logic
    setStatusMessage({
      type: "success",
      text: "Blood request submitted successfully!"
    });
    
    // Reset form
    setFormData(initialFormState);
    
    // Clear message after a few seconds
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 5000);
  };

  return (
    <div className="container blood-request-page">
      <div className="card form-card">
        <h2 className="text-center mb-lg">Request Blood</h2>
        <p className="text-center text-light mb-lg">
          Please fill out the form below to submit a blood request. We will notify potential donors in your area.
        </p>

        {statusMessage.text && (
          <div className={`status-message ${statusMessage.type}`}>
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group flex-responsive">
            <div className="form-field">
              <label>Patient Name *</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter patient name"
              />
            </div>
            <div className="form-field">
              <label>Blood Group *</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="form-group flex-responsive">
            <div className="form-field">
              <label>Required Units *</label>
              <input
                type="number"
                name="units"
                min="1"
                value={formData.units}
                onChange={handleChange}
                className="input-field"
                placeholder="Number of units"
              />
            </div>
            <div className="form-field">
              <label>Hospital / Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter hospital name or city"
              />
            </div>
          </div>

          <div className="form-group flex-responsive">
            <div className="form-field">
              <label>Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter contact number"
              />
            </div>
            <div className="form-field">
              <label>Required Date</label>
              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="form-field">
            <label>Urgency Level</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div className="form-field">
            <label>Additional Notes / Message</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="input-field textarea-field"
              placeholder="Any additional information for donors"
              rows="4"
            ></textarea>
          </div>

          <div className="text-center mt-lg">
            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BloodRequest;
