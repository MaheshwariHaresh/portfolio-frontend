import "../styles/Technology.css";
import Tooltip from "@mui/material/Tooltip";

const Technology = () => {
  const skills = [
    "react.svg",
    "html.svg",
    "css.svg",
    "js.svg",
    "node.svg",
    "bootstrap.svg",
    "postman.svg",
    "github.svg",
    "express.svg",
    "npm.svg",
  ];

  return (
    <div className="tech-container">
      {/* Title */}
      <div className="tech-title-wrapper">
        <p className="h2 tech-title">
          <span>SKILLS</span>
        </p>
      </div>

      {/* Subtitle */}
      <p className="h4 tech-subtitle">
        The skills, tools and technologies I use:
      </p>

      {/* Icons Grid */}
      <div className="tech-grid">
        {skills.map((icon, index) => (
          <Tooltip
            key={index}
            title={icon.split(".")[0].toUpperCase()}
            arrow
            placement="top"
          >
            <img
              src={`/icons/${icon}`}
              alt={icon.split(".")[0]}
              className="tech-icon"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Technology;
