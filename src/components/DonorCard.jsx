import "./DonorCard.css";

/**
 * DonorCard Component
 *
 * 1. What it does: Displays donor information (name, blood group, location, etc.) in a card.
 * 2. Why we need it: To have a reusable UI for presenting donors on the Matching Donors page or Dashboard.
 * 3. Which React concept it demonstrates: React Props - data is passed down to this component to render dynamically.
 */
function DonorCard({ name, bloodGroup, location, available }) {
  return (
    <div className="card donor-card">
      <div className="donor-card-header">
        <div className="donor-avatar">{name.charAt(0)}</div>
        <div>
          <h3 className="donor-name">{name}</h3>
          <p className="donor-location">📍 {location}</p>
        </div>
      </div>

      <div className="donor-card-body">
        <div className="blood-group-badge">{bloodGroup}</div>
        <div
          className={`availability-badge ${available ? "available" : "unavailable"}`}
        >
          {available ? "Available Now" : "Not Available"}
        </div>
      </div>

      <div className="donor-card-footer">
        <button
          className="btn btn-primary"
          style={{ width: "100%" }}
          disabled={!available}
        >
          Contact Donor
        </button>
      </div>
    </div>
  );
}

export default DonorCard;
