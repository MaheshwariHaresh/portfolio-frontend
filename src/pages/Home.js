import "../styles/Home.css";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Technology from "../pages/Technology";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";

const Home = () => {
  const pages = [
    {
      sectionId: "services",
      page: <Services />,
    },
    {
      sectionId: "technology",
      page: <Technology />,
    },
    {
      sectionId: "projects",
      page: <Projects />,
    },

    {
      sectionId: "contact",
      page: <Contact />,
    },
    {
      sectionId: "footer",
      page: <Footer />,
    },
  ];
  return (
    <div className="main-container">
      <div className="home-container">
        <Navbar />

        <div className="home-content">
          <p className="intro-text">HI! I'M</p>
          <p className="h1">
            <span>HARESH KUMAR</span>
          </p>
          <div className="typing-text">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="desc-text">
            Passionate developer dedicated to building interactive websites that
            are fast, accessible, and responsive.
          </p>
          <Button
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
              borderRadius: "25px",
              marginTop: "20px",
              padding: "10px 25px",
              fontWeight: "bold",
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {pages.map((item, index) => (
        <div key={index}>
          <hr className="hr-gradient" />
          <section id={item.sectionId} className="sections">
            {item.page}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Home;
