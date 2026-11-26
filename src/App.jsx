import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
  reviewsSection,
  reviews,
  footerData,
  footerText,
} from "./data/portfolioData";

const App = () => {
  return (
    <div className="sketch-app">
      {/* Subtle Botanical / Paper Texture Background Grain */}
      <div className="sketch-grain-overlay" aria-hidden="true" />
      
      <Navbar links={navLinks} cta={navCta} />

      <main className="sketch-main">
        <Hero data={hero} stats={stats} />
        <About about={about} facts={facts} reviewsSection={reviewsSection} reviews={reviews} />
        <Skills content={skillsSection} skills={skills} />
        <Projects content={projectsSection} projects={projects} />
        <Experience content={experienceSection} timeline={timeline} />
        <Contact content={contactSection} />
      </main>

      <Footer
        data={footerData}
        links={navLinks}
        socialLinks={hero.socialLinks}
        text={footerText}
      />
    </div>
  );
};

export default App;
