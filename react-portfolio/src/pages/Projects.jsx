import ProjectCard from '../components/ProjectCard.jsx';
import { featuredProjects, otherProjects } from '../data/projects.js';

export default function Projects() {
  return (
    <div className="page-projects container">
      <section className="section">
        <h2>Highlighted Work</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>More Projects</h2>
        <div className="project-grid compact">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
