import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import './App.css';
import Logo from './assets/delta.png';

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code }
  ];

  return (
      <nav className="glass-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <img src={Logo} alt="Logo" className="brand-icon" />
            <span className="brand-text">Delta-developing</span>
          </div>

          <ul className="nav-menu">
            {navItems.map(({ id, label, icon: Icon }) => (
                <li
                    key={id}
                    className={`nav-item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => setActiveSection(id)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

// Home Section
const HomeSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Developer', 'Designer', 'Creator', 'Innovator'];
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
  }, [currentIndex, roleIndex, roles]);

  return (
      <section className="section hero-section" id="home">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <span className="badge-text">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Delta</span>
          </h1>

          <div className="hero-subtitle">
            <span className="static-text">I'm a </span>
            <span className="dynamic-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Student Data Scientist and Artificial Intelligence Enthusiast passionate about crafting innovative solutions and exploring the intersection of technology and creativity.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{new Date().getFullYear() - 2020}+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Ideas</span>
            </div>
          </div>
        </div>
      </section>
  );
};

// About Section
const AboutSection = () => {
  const skillCategories = [
    {
      category: 'Operating Systems',
      skills: [
        { name: 'Linux', level: 90, icon: '🐧' },
        { name: 'Windows', level: 95, icon: '🪟' },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML5', level: 100, icon: '🌐' },
        { name: 'CSS/SCSS', level: 95, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Angular', level: 55, icon: '🔵' },
        { name: 'Node.js', level: 75, icon: '🟢' },
      ],
    },
    {
      category: 'App Development',
      skills: [
        { name: 'C/C++', level: 95, icon: '💻' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 85, icon: '🗄️' },
        { name: 'Rust', level: 70, icon: '🦀' },
        { name: 'C#', level: 55, icon: '🔵' },
        { name: 'Java', level: 35, icon: '☕' },
        { name: 'Flutter', level: 30, icon: '🦋' },
      ],
    },
  ];

  return (
      <section className="section about-section" id="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <div className="about-intro">
            <div className="profile-card glass-card">
              <div className="profile-avatar">
                <img src={Logo} alt="Delta Avatar" className="avatar-image" />
              </div>
              <h3>Delta</h3>
              <p className="intro-text">
                I'm a passionate Web and App Developer with a knack for creating sleek, efficient, and user-friendly applications.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Skills & Technologies</h3>
            {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{category.category}</h4>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skill.name}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <h4 className="skill-name">{skill.name}</h4>
                          </div>
                          <div className="skill-progress">
                            <div className="progress-bar">
                              <div
                                  className="progress-fill"
                                  style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'This Website',
      description: 'A modern portfolio website showcasing my skills and projects.',
      tech: ['React', 'CSS3', 'JavaScript'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/zuerelas.github.io',
      LiveLink: ''
    },
    {
      title: 'Suitwalk Linz Website',
      description: 'A responsive website for Suitwalk Linz, featuring a sleek design and smooth animations. With the feature of registering for the event via Telegram.',
      tech: ['React', 'Node.js', 'MariaDB', 'Telegram API'],
      status: 'Completed',
      githubLink: 'https://github.com/Zuerelas/suitwalk-linz-homepage',
      LiveLink: 'https://suitwalk-linz.at'
    },
    {
      title: 'VidQ Game',
      description: 'A fun and interactive game i made for a school project, where you have to answer questions while watching a video.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      status: 'Completed',
      githubLink: 'https://github.com/Xandll/video-quiz',
      LiveLink: 'https://vidq.xandll.com/'
    },
    {
      title: 'Suitwalk Linz Rework',
      description: 'A complete rework of the Suitwalk Linz website using modern web technologies and a focus on user experience.',
      tech: ['React', 'TypeScript', 'Node.js', 'Postgresql', 'Telegram API', 'Google Login API'],
      status: 'In Progress',
      githubLink: '',
        LiveLink: ''
    },
    {
      title: 'Dynamic Ordering System',
      description: 'Windows App for Events to manage orders dynamically with real-time updates and reporting features.',
      tech: ['React', 'Tauri', 'Rust-backend', 'SQLite'],
      status: 'In Progress',
      githubLink: '',
        LiveLink: ''
    }
  ];

  return (
      <section className="section projects-section" id="projects">
        <div className="projects-content">
          <h2 className="section-title">My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
                <div
                    key={project.title}
                    className="project-card glass-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              <Github size={18} />
                              <span>GitHub</span>
                            </a>
                        )}
                        {project.LiveLink && (
                            <a
                                href={project.LiveLink}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                              <span>Live</span>
                            </a>
                        )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Footer Component
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

const ImprintSection = () => {
  return (
      <section className="section imprint-section" id="imprint">
        <div className="about-content">
          <h2 className="section-title">Imprint (Impressum)</h2>

          <div className="imprint-content glass-card">
            <h3>Information pursuant to §5 E-Commerce Act (ECG) and §25 Media Act (MStV):</h3>

            <h3>Website Operator:</h3>
            <p>
              <strong>Name:</strong> Elias Pöschl<br />
              <strong>Country:</strong> Austria<br />
              <strong>Email:</strong> <a href="mailto:eliaspoe194@gmail.com">eliaspoe194@gmail.com</a><br />
              <strong>GitHub:</strong> <a href="https://github.com/DeltaAT" target="_blank" rel="noopener noreferrer">@DeltaAT</a>
            </p>

            <h3>Hosting Provider:</h3>
            <p>
              <strong>Service:</strong> GitHub Pages<br />
              <strong>Operator:</strong> GitHub, Inc.<br />
              <strong>Address:</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA<br />
              <strong>Website:</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a><br />
              <strong>Terms:</strong> <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer">GitHub Pages Documentation</a>
            </p>

            <h3>Liability for Content:</h3>
            <p>
              As service providers, we are responsible for our own content in accordance with Austrian law and §7(1) of the Telemediengesetz (TMG).
              We are obligated to monitor our content for legal violations. However, we are not obligated to monitor external information provided
              by third parties or to investigate alleged unlawful activity. Our obligations to remove or block the use of information remain unaffected.
            </p>

            <h3>Liability for Links:</h3>
            <p>
              Our website contains links to external third-party websites. We have no influence over their content and assume no liability for them.
              The respective provider or operator of linked pages is responsible for their content. At the time of linking, we verified that no legal violations existed.
              However, continuous monitoring of linked content is not reasonable without concrete evidence of violations.
            </p>

            <h3>Copyright and Intellectual Property:</h3>
            <p>
              The content and works created by the site operators are subject to Austrian copyright law and international copyright treaties.
              Reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright law require written permission
              of the author or creator. Unauthorized use may result in civil or criminal penalties under Austrian law (§91 et seq. Urheberrechtsgesetz - UrhG).
            </p>

            <h3>Disclaimer:</h3>
            <p>
              The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind,
              express or implied, regarding the accuracy, adequacy, or completeness of this information. Your use of this website is at your own risk.
              We shall not be liable for any damages arising from the use of this website or its content.
            </p>

            <h3>Dispute Resolution:</h3>
            <p>
              Consumers in Austria have the right to access the online dispute resolution platform (ODR) provided by the European Commission at
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> ec.europa.eu/consumers/odr/</a>.
            </p>

            <h3>Last Updated:</h3>
            <p>{new Date().toLocaleDateString('de-AT')}</p>
          </div>
        </div>
      </section>
  );
};

const PrivacyPolicySection = () => {
  return (
      <section className="section privacy-section" id="privacy">
        <div className="about-content">
          <h2 className="section-title">Privacy Policy (Datenschutzerklärung)</h2>

          <div className="imprint-content glass-card">
            <h3>1. Introduction</h3>
            <p>
              This privacy policy explains how we handle your personal data in compliance with the Austrian Data Protection Act (Datenschutzgesetz - DSG)
              and the General Data Protection Regulation (GDPR - EU 2016/679). Since this website is hosted on GitHub Pages,
              please also review <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's Privacy Statement</a>.
            </p>

            <h3>2. Data Controller (Verantwortlicher)</h3>
            <p>
              <strong>Name:</strong> Elias Pöschl<br />
              <strong>Email:</strong> <a href="mailto:eliaspoe194@gmail.com">eliaspoe194@gmail.com</a><br />
            </p>

            <h3>3. Scope of Data Processing</h3>
            <p>
              This website does not actively collect personal data through forms or registration mechanisms.
              However, your browser automatically transmits certain technical information to GitHub's servers.
            </p>

            <h3>4. Automatically Collected Information</h3>
            <p>
              When you visit this website, the following technical information may be automatically collected:
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>IP Address:</strong> Your Internet Protocol address</li>
              <li><strong>Browser Information:</strong> Browser type, version, and user agent</li>
              <li><strong>Operating System:</strong> Your device's operating system</li>
              <li><strong>Referrer:</strong> The website from which you accessed this site</li>
              <li><strong>Pages Visited:</strong> URLs of pages you visit and time spent</li>
              <li><strong>Request Duration:</strong> Time required to fulfill your request</li>
            </ul>

            <h3>5. Legal Basis for Data Processing</h3>
            <p>
              Data processing is based on Article 6(1)(f) GDPR (legitimate interest).
              Our legitimate interest is to ensure website functionality, security, and to analyze usage patterns for improvement.
            </p>

            <h3>6. GitHub Pages and Third-Party Hosting</h3>
            <p>
              This website is hosted on GitHub Pages, a static hosting service operated by GitHub, Inc.
              GitHub may collect information about your visit in accordance with their privacy policy and terms of service.
              GitHub is certified under the EU-US Data Privacy Framework. For details, see:
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', marginTop: '10px' }}>
              <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a></li>
              <li><a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer">GitHub Terms of Service</a></li>
            </ul>

            <h3>7. Cookies and Tracking Technologies</h3>
            <p>
              <strong>This website does not set cookies.</strong> However, GitHub Pages may set cookies for technical purposes.
              Third-party services linked from this website (GitHub, LinkedIn, etc.) may set their own cookies.
              We recommend reviewing their privacy policies for information about cookie usage.
            </p>

            <h3>8. External Links and Third-Party Services</h3>
            <p>
              This website contains links to external websites and services including:
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', marginTop: '10px' }}>
              <li>GitHub (github.com)</li>
              <li>LinkedIn (linkedin.com)</li>
              <li>Email services (mailto links)</li>
            </ul>
            <p>
              These external sites have their own privacy policies and data protection measures.
              We are not responsible for their data handling practices or content. We recommend reviewing their privacy policies before providing any personal information.
            </p>

            <h3>9. Data Retention</h3>
            <p>
              Technical data collected by GitHub is retained in accordance with GitHub's retention policies.
              We do not retain any personal data longer than necessary for the stated purposes.
            </p>

            <h3>10. Your Rights Under GDPR and Austrian DSG</h3>
            <p>
              You have the following rights regarding your personal data:
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Right of Access (Art. 15 GDPR):</strong> You can request information about what personal data we hold about you</li>
              <li><strong>Right to Rectification (Art. 16 GDPR):</strong> You can correct inaccurate personal data</li>
              <li><strong>Right to Erasure (Art. 17 GDPR):</strong> You can request deletion of your personal data</li>
              <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> You can receive your data in a structured format</li>
              <li><strong>Right to Object (Art. 21 GDPR):</strong> You can object to data processing</li>
              <li><strong>Right to Restrict Processing (Art. 18 GDPR):</strong> You can request limitations on data processing</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:eliaspoe194@gmail.com">eliaspoe194@gmail.com</a>.
            </p>

            <h3>11. Data Protection Authority</h3>
            <p>
              If you believe your personal data has been processed in violation of Austrian or European data protection law,
              you have the right to lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde):
            </p>
            <p>
              <strong>Austrian Data Protection Authority</strong><br />
              Wickenburggasse 8<br />
              1080 Vienna, Austria<br />
              Phone: +43 1 52 152-0<br />
              Email: <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a><br />
              Website: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>
            </p>

            <h3>12. Data Security</h3>
            <p>
              We take reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
              Data transmission to GitHub's servers is encrypted using HTTPS/TLS protocols.
            </p>

            <h3>13. Analytics and Logging</h3>
            <p>
              This website does not use analytics tools or tracking pixels. No tracking data is collected or stored by the site owner.
              GitHub may retain access logs in accordance with their privacy policy.
            </p>

            <h3>14. Changes to This Privacy Policy</h3>
            <p>
              We may update this privacy policy from time to time to comply with legal requirements or reflect changes in our practices.
              We will notify you of significant changes by updating the "Last Updated" date below.
            </p>

            <h3>15. Contact</h3>
            <p>
              If you have any questions about this privacy policy or our data protection practices, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:eliaspoe194@gmail.com">eliaspoe194@gmail.com</a>
            </p>

            <h3>16. Compliance with Austrian and EU Law</h3>
            <p>
              This privacy policy complies with:
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', marginTop: '10px' }}>
              <li>Austrian Data Protection Act (Datenschutzgesetz - DSG)</li>
              <li>General Data Protection Regulation (GDPR - EU 2016/679)</li>
              <li>Austrian E-Commerce Act (E-Commerce-Gesetz - ECG)</li>
              <li>Austrian Telecommunications Act (Telekommunikationsgesetz - TKG)</li>
            </ul>

            <h3>Last Updated:</h3>
            <p>{new Date().toLocaleDateString('de-AT')}</p>
          </div>
        </div>
      </section>
  );
};

// Main App Component
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
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'imprint':
        return <ImprintSection />;
      case 'privacy':
        return <PrivacyPolicySection />;
      default:
        return <HomeSection />;
    }
  };

  return (
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="main-content">
          {renderSection()}
        </main>

        <Footer setActiveSection={setActiveSection} />
      </div>
  );
};

export default App;
