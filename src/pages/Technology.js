import "../styles/Technology.css";
import Tooltip from "@mui/material/Tooltip";

const Technology = () => {
  const skills = [
    { title: "React.js", icon: "react.svg" },
    { title: "HTML", icon: "html.svg" },
    { title: "Javascript", icon: "js.svg" },
    { title: "CSS", icon: "css.svg" },
    { title: "Node.js", icon: "node.svg" },
    { title: "Bootstrap", icon: "bootstrap.svg" },
    { title: "Postman", icon: "postman.svg" },
    { title: "Github", icon: "github.svg" },
    { title: "Express.js", icon: "express.svg" },
    { title: "npm.js", icon: "npm.svg" },
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
        {skills.map((item, index) => (
          <Tooltip key={index} title={item.title} arrow placement="top">
            <img
              src={`/icons/${item.icon}`}
              alt={item.title}
              className="tech-icon"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Technology;
