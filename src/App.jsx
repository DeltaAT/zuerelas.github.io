import { useState, useEffect } from 'react';
import './styles/App.css';

import Background from './components/Background';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ImprintSection from './components/ImprintSection';
import PrivacyPolicySection from './components/PrivacyPolicySection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'imprint' || hash === 'privacy' || hash === 'home' || hash === 'about' || hash === 'projects') {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when activeSection changes
  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'imprint':
        return <ImprintSection />;
      case 'privacy':
        return <PrivacyPolicySection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Background />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main-content">
        {renderSection()}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
