
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  navLinks,
  navCta,
  hero,
  stats,
  about,
  facts,
  projectsSection,
  projects,
  skillsSection,
  skills,
  experienceSection,
  timeline,
  contactSection,
  footerText,
} from "./data/portfolioData";

const App = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    let observer;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
              target.classList.add("is-visible");
              if (target.dataset.revealSeen === "true") {
                target.classList.add("reveal--repeat");
              } else {
                target.dataset.revealSeen = "true";
              }
            } else {
              target.classList.remove("is-visible");
              if (target.dataset.revealSeen === "true") {
                target.classList.add("reveal--repeat");
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      items.forEach((item) => observer.observe(item));
    }

    const root = document.querySelector(".app");
    let rafId = null;
    let nextX = window.innerWidth / 2;
    let nextY = window.innerHeight / 2;

    const setSpotlight = (x, y) => {
      if (!root) return;
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const scheduleSpotlight = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setSpotlight(nextX, nextY);
        rafId = null;
      });
    };

    const handleMove = (event) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (root) {
        root.style.setProperty("--cursor-opacity", "1");
      }
      scheduleSpotlight();
    };

    const handleLeave = () => {
      if (root) {
        root.style.setProperty("--cursor-opacity", "0");
      }
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const enableSpotlight = isFinePointer && !isSmallScreen && !prefersReducedMotion;

    if (enableSpotlight) {
      setSpotlight(nextX, nextY);
      window.addEventListener("mousemove", handleMove, { passive: true });
      window.addEventListener("mouseleave", handleLeave);
    } else if (root) {
      root.style.setProperty("--cursor-opacity", "0");
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="app">
      <div className="noise" />
      <div className="cursor-spotlight" aria-hidden="true">
        <div className="cursor-spotlight__blob cursor-spotlight__blob--outer" />
        <div className="cursor-spotlight__blob cursor-spotlight__blob--inner" />
      </div>
      <Navbar links={navLinks} cta={navCta} />
      <main>
        <Hero data={hero} />
        <Stats stats={stats} />
        <About about={about} facts={facts} />
        <Skills content={skillsSection} skills={skills} />
        <Projects content={projectsSection} projects={projects} />
        <Experience content={experienceSection} timeline={timeline} />
        <Contact content={contactSection} />
      </main>
      <Footer text={footerText} />
    </div>
  );
};

export default App;
