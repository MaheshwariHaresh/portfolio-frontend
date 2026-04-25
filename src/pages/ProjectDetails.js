import { useParams, Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { useProject } from "../context/project";
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, loading] = useProject();

  if (loading) return <p className="loading-text">Loading...</p>;

  const project = projects.find((p) => p._id === id);

  if (!project)
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <Link className="back-btn" to="/projects">
          Go Back
        </Link>
      </div>
    );

  return (
    <div className="project-details-container">
      <Link to="/projects" className="back-button">
        ← Back to Portfolio
      </Link>

      <h1 className="project-title">{project.title}</h1>

      {/* image Slider */}
      <ImageSlider images={project.images} />

      <div className="project-description-box">
        <h2 className="desc-heading">Project Overview</h2>
        <p className="desc-text">{project.description}</p>
      </div>

      {/* technologies */}
      <div className="project-tech-box">
        <h3>Technologies Used</h3>
        <div className="tech-list">
          {project.techStack?.map((t, i) => (
            <span key={i} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* description */}
      <div className="project-description">
        <h3>Description</h3>

        {project.longDescription.split("\n\n").map((para, index) => (
          <p key={index} className="desc-paragraph">
            {para}
          </p>
        ))}
      </div>

      {/* live demo */}
      {project?.liveDemo && (
        <a href={project.liveDemo} target="_blank" className="live-btn">
          🔗 View Live Demo
        </a>
      )}

      {/* GitHub */}
      {project?.githubLink && (
        <a href={project.githubLink} target="_blank" className="github-btn">
          🧩 View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
