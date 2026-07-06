// import "../styles/Technology.css";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";

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

// container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// item animation
const item = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Technology = () => {
  return (
    <div className="tech-container">
      {/* TITLE */}
      <motion.div
        className="tech-title-wrapper"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="h2 tech-title">
          <span>SKILLS</span>
        </p>
      </motion.div>

      {/* SUBTITLE */}
      <motion.p
        className="h4 tech-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        The skills, tools and technologies I use:
      </motion.p>

      {/* GRID */}
      <motion.div
        className="tech-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((itemData, index) => (
          <motion.div key={index} variants={item}>
            <Tooltip title={itemData.title} arrow placement="top">
              <img
                src={`/icons/${itemData.icon}`}
                alt={itemData.title}
                className="tech-icon"
              />
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
