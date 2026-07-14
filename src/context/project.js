// context/ProjectContext.js
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/project/projects`,
        );
        setProjects(data?.projects);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={[projects, loading]}>
      {children}
    </ProjectContext.Provider>
  );
};

const useProject = () => useContext(ProjectContext);
export { useProject, ProjectProvider };
