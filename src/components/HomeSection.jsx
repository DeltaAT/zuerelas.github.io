import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const roles = ['Developer', 'Data Scientist', 'AI Enthusiast', 'Problem Solver', 'Tech Explorer'];

const HomeSection = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex]);

  return (
    <section className="section hero-section" id="home">
      <div className="hero-content fade-in">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span className="badge-text">Available for new projects</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="name-highlight">Delta</span>
        </h1>

        <h2 className="hero-name">Elias Pöschl</h2>

        <div className="hero-subtitle">
          <span className="static-text">I'm a </span>
          <span className="dynamic-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-description">
          Student Data Scientist and Artificial Intelligence Enthusiast passionate about crafting innovative solutions and exploring the intersection of technology and creativity.
        </p>

        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => setActiveSection('projects')}
          >
            View Projects
            <ArrowRight size={18} />
          </button>
          <a className="btn btn-secondary" href="mailto:eliaspoe194@gmail.com">
            <Mail size={18} />
            Get in touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">{new Date().getFullYear() - 2020}+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Ideas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
