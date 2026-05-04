export default function Header() {
  return (
    <section className="hero">
      <div className="hero-copy container">
        <div className="profile-badge">
          <span className="profile-initials">MM</span>
        </div>
        <div>
          <h1>Matt McGraw</h1>
          <p className="subtitle">Senior Web Developer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mattmcgraw" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:mattymcgraw@me.com">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
