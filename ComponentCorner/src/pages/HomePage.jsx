import Hero from '../components/Hero';
import './HomePage.css';
function HomePage() {
  return (
    <div className="home-page">
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Your go-to destination for all your component needs!"
        cta="Shop Now"
      />
      <section className="Introduction">
        <h2>About Us</h2>
        <p>ComponentCorner first started as a small project for an online class, but later grew into a full-fledged online store.</p>
      </section>
    </div>
  );
}
export default HomePage;