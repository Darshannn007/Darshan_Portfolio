import { useState, useEffect } from "react";

const Navbar = ({ links, cta }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sketch-nav ${scrolled ? "sketch-nav--scrolled" : ""}`}>
      <div className="sketch-nav__container">
        {/* Brand / Logo in Instrument Serif */}
        <a href="#home" className="sketch-nav__brand">
          <span className="sketch-nav__name">Darshan Desale</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="sketch-nav__links">
          {links.map((link) => (
            <a key={link.href} className="sketch-nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Contact link */}
        <div className="sketch-nav__actions">
          <a className="sketch-nav__cta" href={cta.href}>
            <span>{cta.label}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Mobile hamburger toggle */}
          <button 
            className="sketch-nav__toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`sketch-nav__burger ${mobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sketch-nav__mobile-drawer">
          {links.map((link) => (
            <a 
              key={link.href} 
              className="sketch-nav__mobile-link" 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            className="sketch-nav__mobile-cta" 
            href={cta.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {cta.label} &rarr;
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
