import { motion } from "framer-motion";
import heroImage from "../assets/hero_portrait.png";
import Stats from "./Stats";

const getSocialMeta = (href) => {
  const url = href.toLowerCase();

  if (url.includes("linkedin")) {
    return {
      name: "LinkedIn",
      icon: (
        <svg
          className="social-icon__svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" rx="1" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      colors: {
        start: "#0077b5",
        end: "#00a0dc",
        glow: "rgba(0, 160, 220, 0.45)",
      },
    };
  }

  if (url.includes("github")) {
    return {
      name: "GitHub",
      icon: (
        <svg
          className="social-icon__svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z" />
        </svg>
      ),
      colors: {
        start: "#24292e",
        end: "#3a4149",
        glow: "rgba(36, 41, 46, 0.4)",
      },
    };
  }

  if (url.includes("leetcode")) {
    return {
      name: "LeetCode",
      icon: (
        <svg
          className="social-icon__svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 6v12h5" />
          <path d="M18 8a4 4 0 1 0 0 8" />
        </svg>
      ),
      colors: {
        start: "#ffa116",
        end: "#ff7a00",
        glow: "rgba(255, 161, 22, 0.45)",
      },
    };
  }

  return {
    name: "Social",
    icon: (
      <svg
        className="social-icon__svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M7 12h10" />
      </svg>
    ),
    colors: {
      start: "#b85c38",
      end: "#8c6a46",
      glow: "rgba(184, 92, 56, 0.4)",
    },
  };
};

const Hero = ({ data, stats }) => {
  const {
    greeting,
    firstName,
    lastName,
    subtitle,
    primaryCta,
    secondaryCta,
    chips,
    floatingTop,
    floatingBottom,
    socialLinks,
  } = data;

  return (
    <section id="home" className="sketch-hero">
      {/* Decorative Botanical / Paper Watermarks */}
      <div className="sketch-hero__watermark" aria-hidden="true">
        <span>&bull; Personal Portfolio &bull; 2026</span>
      </div>

      <div className="sketch-hero__container">
        {/* Left Column: Editorial Typography */}
        <div className="sketch-hero__text">
          <div className="sketch-hero__eyebrow-wrap">
            <span className="sketch-badge">{greeting}</span>
          </div>

          <h1 className="sketch-hero__title">
            <span className="sketch-hero__first">{firstName}</span>
            <span className="sketch-hero__last">{lastName}</span>
          </h1>

          <p className="sketch-hero__tagline">
            Full Stack Java Developer &bull; React &amp; Spring Boot Specialist
          </p>

          <p className="sketch-hero__desc">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="sketch-hero__actions">
            <a className="sketch-btn sketch-btn--primary" href={primaryCta.href}>
              {primaryCta.label}
              <span className="sketch-btn__arrow">&rarr;</span>
            </a>
            <a className="sketch-btn sketch-btn--outline" href={secondaryCta.href} download>
              {secondaryCta.label}
            </a>
          </div>

          {/* Tags / Chips as delicate catalog labels */}
          <div className="sketch-hero__chips">
            {chips.map((chip) => (
              <span key={chip} className="sketch-chip">
                {chip}
              </span>
            ))}
          </div>

          {/* Quick Stats Strip */}
          <Stats stats={stats} />
        </div>

        {/* Right Column: Sketchbook Plate Portrait */}
        <div className="sketch-hero__visual">
          <motion.div 
            className="sketch-plate"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Paper Corner Tape / Tack Decor */}
            <div className="sketch-plate__tape sketch-plate__tape--top-left" />
            <div className="sketch-plate__tape sketch-plate__tape--top-right" />

            <div className="sketch-plate__inner">
              <img 
                src={heroImage} 
                alt={`${firstName} ${lastName}`} 
                className="sketch-plate__image"
                loading="eager"
              />
              <div className="sketch-plate__caption">
                <span className="sketch-plate__coords">19.9975° N, 73.7898° E</span>
              </div>
            </div>

            {/* Note badge top */}
            {floatingTop && (
              <div className="sketch-note sketch-note--top">
                <span className="sketch-note__pin">&bull;</span>
                <div className="sketch-note__content">
                  <span className="sketch-note__sub">{floatingTop.title}</span>
                  <strong className="sketch-note__main">{floatingTop.value}</strong>
                </div>
              </div>
            )}

            {/* Note badge bottom */}
            {floatingBottom && (
              <div className="sketch-note sketch-note--bottom">
                <span className="sketch-note__pin">&bull;</span>
                <div className="sketch-note__content">
                  <span className="sketch-note__sub">{floatingBottom.title}</span>
                  <strong className="sketch-note__main">{floatingBottom.value}</strong>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Social Icons Rail (Right Side) */}
      <div className="social-rail" aria-label="Social profiles">
        {socialLinks.map((link) => {
          const meta = getSocialMeta(link.href);

          return (
            <a
              key={link.href}
              className="social-icon"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={meta.name}
              title={meta.name}
              style={{
                "--icon-start": meta.colors.start,
                "--icon-end": meta.colors.end,
                "--icon-glow": meta.colors.glow,
              }}
            >
              {meta.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
