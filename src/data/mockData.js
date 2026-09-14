/**
 * mockData.js
 *
 * 1. What it does: Provides realistic fake data for donors and blood requests.
 * 2. Why we need it: To build and test the UI without needing a real backend or database.
 * 3. Which React concept it demonstrates: Working with arrays of objects that can be mapped over to render lists of components.
 */

export const mockDonors = [
  {
    id: 1,
    name: "Sarah Johnson",
    bloodGroup: "O+",
    location: "Downtown Medical Center",
    available: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    bloodGroup: "A-",
    location: "Westside Clinic",
    available: true,
  },
  {
    id: 3,
    name: "Emily Davis",
    bloodGroup: "B+",
    location: "North City Hospital",
    available: false,
  },
  {
    id: 4,
    name: "James Wilson",
    bloodGroup: "AB+",
    location: "Southside Community Center",
    available: true,
  },
];

export const mockBloodRequests = [
  {
    id: 1,
    patientName: "Robert Smith",
    bloodGroup: "O-",
    location: "General Hospital",
    urgency: "High",
    units: 2,
    status: "Pending",
  },
  {
    id: 2,
    patientName: "Maria Garcia",
    bloodGroup: "A+",
    location: "City Memorial",
    urgency: "Medium",
    units: 1,
    status: "Fulfilled",
  },
  {
    id: 3,
    patientName: "David Lee",
    bloodGroup: "AB-",
    location: "University Hospital",
    urgency: "Critical",
    units: 3,
    status: "Pending",
  },
];
