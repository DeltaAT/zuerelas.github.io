import Logo from '../assets/delta.png';

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
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'TypeScript', level: 85, icon: '🔷' },
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Angular', level: 55, icon: '🔵' },
    ],
  },
  {
    category: 'App Development',
    skills: [
      { name: 'C/C++', level: 95, icon: '💻' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'SQL', level: 85, icon: '🗄️' },
      { name: 'C#', level: 75, icon: '🔵' },
      { name: 'Rust', level: 70, icon: '🦀' },
      { name: 'Java', level: 35, icon: '☕' },
      { name: 'Flutter', level: 30, icon: '🦋' },
    ],
  },
];

const AboutSection = () => {
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

export default AboutSection;
