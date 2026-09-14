import { useState } from "react";
import DonorCard from "../components/DonorCard";
import { mockDonors } from "../data/mockData";
import "./MatchingDonors.css";

/**
 * MatchingDonors Component
 * 
 * 1. How donor filtering works: It compares the component's state filters with the properties of each donor in `mockDonors`.
 * 2. How `filter()` is used: The array `.filter()` method is called to include only donors that match the selected blood group, location text, and availability requirement.
 * 3. How `DonorCard` is reused: It maps over the filtered donors array and renders the existing `DonorCard` component, passing the required props.
 */
function MatchingDonors() {
  const [filters, setFilters] = useState({
    bloodGroup: "",
    location: "",
    availableOnly: false
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Filter matching donors using simple logic
  const filteredDonors = mockDonors.filter((donor) => {
    const matchBlood = filters.bloodGroup === "" || donor.bloodGroup === filters.bloodGroup;
    const matchLocation = filters.location === "" || donor.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchAvailability = !filters.availableOnly || donor.available === true;
    
    return matchBlood && matchLocation && matchAvailability;
  });

  return (
    <div className="container matching-donors-page">
      <div className="text-center mb-lg">
        <h2>Find Matching Blood Donors</h2>
        <p className="text-light">Search for potential donors based on blood type, location, and availability.</p>
      </div>

      <div className="card filter-section mb-lg">
        <div className="filter-group flex-responsive">
          <div className="filter-field">
            <label>Blood Group</label>
            <select
              name="bloodGroup"
              value={filters.bloodGroup}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="">All Types</option>
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
          
          <div className="filter-field">
            <label>Location / City</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="input-field"
              placeholder="Search by city or area"
            />
          </div>
        </div>

        <div className="filter-field checkbox-field mt-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="availableOnly"
              checked={filters.availableOnly}
              onChange={handleFilterChange}
              style={{ marginRight: "var(--spacing-sm)" }}
            />
            Show only currently available donors
          </label>
        </div>
      </div>

      <div className="donors-grid">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <DonorCard
              key={donor.id}
              name={donor.name}
              bloodGroup={donor.bloodGroup}
              location={donor.location}
              available={donor.available}
            />
          ))
        ) : (
          <div className="empty-state text-center card" style={{ gridColumn: "1 / -1" }}>
            <h3 className="mb-sm">No matching donors found.</h3>
            <p className="text-light">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchingDonors;
