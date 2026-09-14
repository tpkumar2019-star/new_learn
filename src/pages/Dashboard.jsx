import { useState } from "react";
import { Link } from "react-router-dom";
import { mockBloodRequests, mockDonors } from "../data/mockData";
import "./Dashboard.css";

/**
 * Dashboard Component
 * 
 * 1. How mock data is displayed: Simple stats are calculated by filtering the `mockBloodRequests` and `mockDonors` arrays.
 * 2. How `map()` is used: It maps over the sorted/filtered requests array to render a list of request cards.
 * 3. How filtering/sorting works: Two states track the selected status filter and sort toggle. The requests array is first filtered, then sorted based on urgency levels before rendering.
 */
function Dashboard() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortByUrgency, setSortByUrgency] = useState(false);

  // Calculate Dashboard Statistics
  const activeRequests = mockBloodRequests.filter((req) => req.status === "Pending").length;
  const availableDonorsCount = mockDonors.filter((donor) => donor.available).length;
  const urgentRequests = mockBloodRequests.filter(
    (req) => req.urgency === "Critical" || req.urgency === "High"
  ).length;
  const completedRequests = mockBloodRequests.filter((req) => req.status === "Fulfilled").length;

  // Filter and Sort Requests
  let processedRequests = mockBloodRequests;

  if (filterStatus !== "All") {
    processedRequests = processedRequests.filter((req) => req.status === filterStatus);
  }

  if (sortByUrgency) {
    const urgencyWeight = { Critical: 3, High: 2, Medium: 1, Normal: 0 };
    processedRequests = [...processedRequests].sort(
      (a, b) => urgencyWeight[b.urgency] - urgencyWeight[a.urgency]
    );
  }

  return (
    <div className="container dashboard-page">
      <div className="dashboard-header mb-lg text-center">
        <h2>Welcome back!</h2>
        <p className="text-light">Here is an overview of the current blood requests and donor availability.</p>
        
        <div className="dashboard-actions mt-lg">
          <Link to="/blood-request" className="btn btn-primary mr-sm">Create Blood Request</Link>
          <Link to="/matching-donors" className="btn btn-outline">Find Donors</Link>
        </div>
      </div>

      <div className="stats-cards-grid mb-lg">
        <div className="card stat-card text-center">
          <h3 className="stat-number">{activeRequests}</h3>
          <p className="stat-label">Active Requests</p>
        </div>
        <div className="card stat-card text-center">
          <h3 className="stat-number text-success">{availableDonorsCount}</h3>
          <p className="stat-label">Available Donors</p>
        </div>
        <div className="card stat-card text-center">
          <h3 className="stat-number text-danger">{urgentRequests}</h3>
          <p className="stat-label">Urgent Requests</p>
        </div>
        <div className="card stat-card text-center">
          <h3 className="stat-number">{completedRequests}</h3>
          <p className="stat-label">Completed Requests</p>
        </div>
      </div>

      <div className="requests-section">
        <div className="flex-responsive justify-between items-center mb-md">
          <h3>Recent Blood Requests</h3>
          <div className="controls-group">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="input-field inline-select mr-sm"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Fulfilled">Fulfilled</option>
            </select>

            <button 
              className={`btn ${sortByUrgency ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSortByUrgency(!sortByUrgency)}
            >
              {sortByUrgency ? "Sorted by Urgency" : "Sort by Urgency"}
            </button>
          </div>
        </div>

        <div className="requests-list">
          {processedRequests.length > 0 ? (
            processedRequests.map((req) => (
              <div key={req.id} className="card request-row flex-responsive justify-between items-center">
                <div className="request-info">
                  <h4 className="patient-name">{req.patientName}</h4>
                  <p className="request-details">
                    <span className="blood-badge">{req.bloodGroup}</span> • {req.units} Units • {req.location}
                  </p>
                </div>
                
                <div className="request-meta flex items-center">
                  <span className={`status-badge ${req.status.toLowerCase()}`}>{req.status}</span>
                  <span className={`urgency-badge ${req.urgency.toLowerCase()}`}>{req.urgency}</span>
                  <Link to="/matching-donors" className="btn btn-secondary btn-sm">Find Donors</Link>
                </div>
              </div>
            ))
          ) : (
            <div className="card text-center empty-state">
              <p className="text-light">No requests match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
