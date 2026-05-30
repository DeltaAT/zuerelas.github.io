import { Home, User, Code } from 'lucide-react';
import Logo from '../assets/delta.png';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Code }
];

const Navigation = ({ activeSection, setActiveSection }) => {
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

export default Navigation;
