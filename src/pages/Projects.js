import Card from "../components/Card";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <p className="section-title">
          <span className="gradient-text">PORTFOLIO</span>
        </p>
      </div>

      <div className="projects-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
