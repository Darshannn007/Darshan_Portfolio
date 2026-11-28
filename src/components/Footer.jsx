import { useEffect, useRef, useState } from "react";

const EMAIL_ADDRESS = "darshandesale143@gmail.com";
const CORE_STACK = ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Docker", "Git"];

const formatPuneTime = () => {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "14:19";
  }
};

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
  const role = data?.role || "Full Stack Java Developer";
  const tagline = data?.tagline || "Building clean, cinematic & scalable web applications with React & Spring Boot.";
  const copyright = data?.copyright || text || "© 2026 Darshan Desale. All rights reserved.";

  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [puneTime, setPuneTime] = useState(() => formatPuneTime());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPuneTime(formatPuneTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_ADDRESS;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }

    setTimeout(() => setCopied(false), 2000);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className={`sketch-footer ${isVisible ? "sketch-footer--visible" : ""}`}
    >
      <div className="sketch-container">
        {/* Main 4-Column Footer Grid */}
        <div className="sketch-footer__grid">
          {/* Column 1: Brand, Status & Local Time */}
          <div className="sketch-footer__col sketch-footer__brand" style={{ "--stagger": "0ms" }}>
            <h3 className="sketch-footer__title">{brand}</h3>
            <p className="sketch-footer__role">{role}</p>
            <p className="sketch-footer__tagline">{tagline}</p>

            <div className="sketch-footer__status-wrap">
              <span className="sketch-footer__status-pill">
                <span className="sketch-footer__pulse-dot" aria-hidden="true" />
                <span>Available for work</span>
              </span>
              <span className="sketch-footer__local-time">
                Maharashtra, India &mdash; {puneTime} IST
              </span>
            </div>
          </div>

          {/* Column 2: Index Navigation */}
          <div className="sketch-footer__col sketch-footer__nav" style={{ "--stagger": "80ms" }}>
            <h4 className="sketch-footer__heading">Index Navigation</h4>
            <ul className="sketch-footer__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="sketch-footer__link">
                    <span className="sketch-footer__link-arr" aria-hidden="true">&rarr;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Stack */}
          <div className="sketch-footer__col sketch-footer__stack" style={{ "--stagger": "160ms" }}>
            <h4 className="sketch-footer__heading">Core Stack</h4>
            <div className="sketch-footer__stack-chips">
              {CORE_STACK.map((tech) => (
                <span key={tech} className="sketch-footer__stack-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Connect & Copy Email */}
          <div className="sketch-footer__col sketch-footer__social" style={{ "--stagger": "240ms" }}>
            <h4 className="sketch-footer__heading">Connect</h4>
            <div className="sketch-footer__social-list">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.label} profile`}
                  className="sketch-footer__social-tag"
                >
                  <span className="sketch-footer__social-icon">
                    {getFooterSocialIcon(item.href)}
                  </span>
                  <span>{item.label}</span>
                  <span className="sketch-footer__social-ext" aria-hidden="true">&#8599;</span>
                </a>
              ))}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                aria-label={`Send email to ${EMAIL_ADDRESS}`}
                className="sketch-footer__social-tag"
              >
                <span className="sketch-footer__social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>Email</span>
                <span className="sketch-footer__social-ext" aria-hidden="true">&#8599;</span>
              </a>
            </div>

            <div className="sketch-footer__copy-box">
              <span className="sketch-footer__email-text">{EMAIL_ADDRESS}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`sketch-footer__copy-btn ${copied ? "sketch-footer__copy-btn--copied" : ""}`}
                aria-label="Copy email address to clipboard"
              >
                {copied ? "Copied \u2713" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Oversized Name Watermark */}
      <div className="sketch-footer__watermark" aria-hidden="true">
        <span>{brand}</span>
      </div>

      {/* 4. Bottom Bar */}
      <div className="sketch-container">
        <div className="sketch-footer__bottom">
          <p className="sketch-footer__copy">{copyright}</p>
          <button
            type="button"
            onClick={handleBackToTop}
            className="sketch-footer__top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span aria-hidden="true">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
