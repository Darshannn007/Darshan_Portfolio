const getFooterSocialIcon = (href = "") => {
  const url = href.toLowerCase();

  if (url.includes("linkedin")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (url.includes("github")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z" />
      </svg>
    );
  }

  if (url.includes("leetcode")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 6v12h5" />
        <path d="M18 8a4 4 0 1 0 0 8" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </svg>
  );
};

const Footer = ({ data, links = [], socialLinks = [], text }) => {
  const brand = data?.brand || "Darshan Desale";
  const role = data?.role || "Full Stack Developer";
  const tagline = data?.tagline || "Crafting robust web systems with React and Spring Boot.";
  const copyright = data?.copyright || text || "© 2026 Darshan Desale. All rights reserved.";

  return (
    <footer className="sketch-footer">
      <div className="sketch-container">
        {/* Upper Colophon Grid */}
        <div className="sketch-footer__grid">
          {/* Left Brand Colophon */}
          <div className="sketch-footer__brand">
            <h3 className="sketch-footer__title">{brand}</h3>
            <p className="sketch-footer__role">{role}</p>
            <p className="sketch-footer__tagline">{tagline}</p>
            <span className="sketch-footer__stamp">SINGAPORE &bull; INDIA EDITION &bull; 2026</span>
          </div>

          {/* Center Navigation Links */}
          <div className="sketch-footer__nav">
            <h4 className="sketch-footer__heading">Index Navigation</h4>
            <ul className="sketch-footer__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="sketch-footer__link">
                    &rarr; {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Connect Links */}
          <div className="sketch-footer__social">
            <h4 className="sketch-footer__heading">Connect</h4>
            <div className="sketch-footer__social-list">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="sketch-footer__social-tag"
                >
                  <span className="sketch-footer__social-icon">
                    {getFooterSocialIcon(item.href)}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="mailto:darshandesale143@gmail.com"
                className="sketch-footer__social-tag"
              >
                <span className="sketch-footer__social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Divider & Legal Note */}
        <div className="sketch-footer__bottom">
          <p className="sketch-footer__copy">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
