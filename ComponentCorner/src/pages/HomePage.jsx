import Hero from '../components/Hero';
import './HomePage.css';
function HomePage() {
  return (
    <div className="home-page">
      <Hero 
        title="Welcome to the Everything store"
        subtitle="Your go-to destination for all your everything needs!"
        cta="Shop Now"
      />
      <section className="Introduction">
        <h2>About Us</h2>
        <p>The Everything store first started as a small project for an online class, but later grew into a full-fledged online store.</p>
      </section>
    </div>
  );
}
export default HomePage;
