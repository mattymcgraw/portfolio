export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-image" />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="button-link">
          View Project
        </a>
      </div>
    </article>
  );
}
