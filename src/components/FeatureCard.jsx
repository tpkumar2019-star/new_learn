import "./FeatureCard.css";

/**
 * FeatureCard Component
 *
 * 1. What it does: Displays a feature of the application with an icon, title, and description.
 * 2. Why we need it: To showcase the main functionalities on the Homepage in an organized, visually appealing way.
 * 3. Which React concept it demonstrates: Reusable Components and Props - isolating a UI element so it can be rendered multiple times with different data.
 */
function FeatureCard({ title, description, icon }) {
  return (
    <div className="card feature-card text-center">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  );
}

export default FeatureCard;
