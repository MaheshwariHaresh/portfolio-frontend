import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../context/theme";
import { IconButton } from "@mui/material";
import "../styles/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-5" href="#top">
          HARESH KUMAR
        </a>

        {/* Hamburger Icon (Mobile) */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Nav Links */}
        <ul className={open ? "navbar-nav open" : "navbar-nav"}>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#services"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#technology"
              onClick={() => setOpen(false)}
            >
              TECHNOLOGIES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              onClick={() => setOpen(false)}
            >
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* toggle theme  */}
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </nav>
    </div>
  );
};

export default Navbar;
