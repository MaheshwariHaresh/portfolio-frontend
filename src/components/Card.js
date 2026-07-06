// import "../styles/Card.css";
import { Share } from "@mui/icons-material";

const Card = ({ project }) => {
  return (
    <div className="card portfolio-card">
      <img
        src={project.images?.[0]} // FIRST PROJECT IMAGE
        className="card-img-top"
        alt={project.title}
      />

      <div className="card-body">
        <h5>{project.title}</h5>
        <p className="card-text">
          {project.techStack?.join(", ") || "Technologies"}
        </p>
      </div>

      <div className="share-icon">
        <Share style={{ color: "white", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Card;
