import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import './Home.css';

/**
 * Home Component
 * 
 * 1. What it does: Renders the main landing page of the application, including a hero section, features, and statistics.
 * 2. Why we need it: To welcome users, explain the platform's value, and provide clear navigation paths to key actions.
 * 3. Which React concept it demonstrates: Component composition (using FeatureCard within Home) and basic routing links.
 */
function Home() {
  const features = [
    {
      id: 1,
      title: 'Request Blood',
      description: 'Quickly submit a request for blood and notify available donors in your area.',
      icon: '🏥'
    },
    {
      id: 2,
      title: 'Become a Donor',
      description: 'Register yourself as a blood donor and save lives when emergencies happen.',
      icon: '🩸'
    },
    {
      id: 3,
      title: 'Find Donors',
      description: 'Search our database for matching blood donors nearby who are ready to help.',
      icon: '🔍'
    },
    {
      id: 4,
      title: 'Manage Requests',
      description: 'Track the status of your blood requests and coordinate with willing donors.',
      icon: '📊'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container text-center flex-col items-center">
          <h1 className="hero-title">Save a Life, Give Blood</h1>
          <p className="hero-subtitle">
            Join our community of life-savers. Whether you need blood or want to donate, 
            BloodConnect makes it fast, easy, and secure.
          </p>
          <div className="hero-actions">
            <Link to="/donor-registration" className="btn btn-primary">Become a Donor</Link>
            <Link to="/blood-request" className="btn btn-secondary">Request Blood</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section text-center">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">5,000+</h3>
              <p className="stat-label">Registered Donors</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">1,200+</h3>
              <p className="stat-label">Lives Saved</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready to make a difference?</h2>
          <p>Every drop counts. Register today and become someone's hero.</p>
          <Link to="/signup" className="btn btn-primary mt-lg">Join BloodConnect Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
