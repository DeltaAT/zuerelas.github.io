import { useEffect, useState } from 'react';
import {
  SiLinux,
  SiHtml5,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiCplusplus,
  SiPython,
  SiRust,
  SiFlutter,
} from 'react-icons/si';
import { FaWindows, FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import Logo from '../assets/delta.png';

const skillCategories = [
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Linux', level: 90, Icon: SiLinux, color: '#FCC624' },
      { name: 'Windows', level: 95, Icon: FaWindows, color: '#0078D4' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML5', level: 100, Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS/SCSS', level: 95, Icon: SiSass, color: '#CC6699' },
      { name: 'JavaScript', level: 95, Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, Icon: SiTypescript, color: '#3178C6' },
      { name: 'React', level: 95, Icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', level: 85, Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Angular', level: 55, Icon: SiAngular, color: '#DD0031' },
    ],
  },
  {
    category: 'App Development',
    skills: [
      { name: 'C/C++', level: 95, Icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', level: 90, Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', level: 85, Icon: FaDatabase, color: '#4479A1' },
      { name: 'C#', level: 75, Icon: TbBrandCSharp, color: '#9B4F96' },
      { name: 'Rust', level: 70, Icon: SiRust, color: '#F74C00' },
      { name: 'Java', level: 35, Icon: FaJava, color: '#E76F00' },
      { name: 'Flutter', level: 30, Icon: SiFlutter, color: '#54C5F8' },
    ],
  },
];

const AboutSection = () => {
  // Animate progress bars from 0 to their target width on mount.
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

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
          <h3 className="subsection-title">Skills &amp; Technologies</h3>
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h4 className="skill-category-title">{category.category}</h4>
              <div className="skills-grid">
                {category.skills.map(({ name, level, Icon, color }, skillIndex) => (
                  <div
                    key={name}
                    className="skill-card glass-card"
                    style={{ '--brand': color, animationDelay: `${skillIndex * 0.06}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">
                        <Icon />
                      </span>
                      <h4 className="skill-name">{name}</h4>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: revealed ? `${level}%` : '0%' }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{level}%</span>
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

export default AboutSection;
