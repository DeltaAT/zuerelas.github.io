import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Serva',
    description: 'Windows App for Events to manage orders dynamically with real-time updates. With integrated Connection for Waiters on Mobile Devices.',
    tech: ['tauri', 'SQLite', 'TypeScript', 'React'],
    status: 'Completed',
    githubLink: 'https://github.com/DeltaAT/Serva',
    LiveLink: 'https://serva.delta-developing.com/'
  },
  {
    title: 'This Website',
    description: 'A modern portfolio website showcasing my skills and projects.',
    tech: ['React', 'CSS3', 'JavaScript'],
    status: 'Completed',
    githubLink: 'https://github.com/Zuerelas/zuerelas.github.io',
    LiveLink: ''
  },
  {
    title: 'VidQ Game',
    description: 'A fun and interactive game i made for a school project, where you have to answer questions while watching a video.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    status: 'Completed',
    githubLink: 'https://github.com/Xandll/video-quiz',
    LiveLink: 'https://vidq.xandll.com/'
  }
];

const ProjectsSection = () => {
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
                    <span className="status-dot" />
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

export default ProjectsSection;
