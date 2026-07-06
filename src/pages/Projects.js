import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useProject } from "../context/project";
// import "../styles/Projects.css";
import { useEffect } from "react";

const Projects = () => {
  const [projects, loading] = useProject();

  useEffect(() => {
    if (loading) return;
  }, [projects, loading]);

  if (loading) {
    return <p className="loading-text">Loading projects...</p>;
  }

  return (
    <div className="projects-container">
      <div>
        <p className="section-title">
          <span className="gradient-text">PORTFOLIO</span>
        </p>
      </div>

      <div className="projects-grid">
        {projects?.map((project) => (
          <Link key={project._id} to={`/project-details/${project._id}`}>
            <Card project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
