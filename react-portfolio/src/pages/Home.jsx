import Header from '../components/Header.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { featuredProjects } from '../data/projects.js';

export default function Home() {
  return (
    <div className="page-home container">
      <Header />
      <section className="section about-section">
        <h2>About Me</h2>
        <p>
          I'm a senior web developer based in the greater Los Angeles area. I love the challenge of learning new
          technologies and developing dynamic applications with them.
        </p>
        <p>
          I have excellent soft skills and work well in a team. Working with product owners, project managers,
          stakeholders, and leadership through active participation in code reviews, design discussions, demos,
          proposals, one-on-ones and rapid prototyping.
        </p>
      </section>

      <section className="section featured-section">
        <h2>Latest Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
