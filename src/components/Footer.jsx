import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="glass-footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Let's Connect</h3>
          <p>Ready to bring your ideas to life? Let's work together!</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/DeltaAT" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/elias-p%C3%B6schl-888220351/" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:eliaspoe194@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Delta. All rights reserved.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#imprint" onClick={(e) => { e.preventDefault(); setActiveSection('imprint'); }}>Imprint</a>
          {' | '}
          <a href="#privacy" onClick={(e) => { e.preventDefault(); setActiveSection('privacy'); }}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
