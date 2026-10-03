import './Hero.css';    

// Hero.jsx
function Hero({ title, subtitle, cta }) {
  return (
    <section className="hero">
      <img
        src="https://placehold.co/1200x400/667eea/ffffff?text=ComponentCorner+Store"
        alt={title}
        className="hero-image"
      />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button className="hero-cta">{cta}</button>
    </section>
  );
}

export default Hero;
