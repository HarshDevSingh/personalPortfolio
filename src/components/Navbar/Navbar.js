import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
import "./Navbar.css";

const Navbar = () => {
  const [click, SetClick] = useState(false);
  const [onScroll, SetOnScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      SetOnScroll(true);
      return;
    }
    SetOnScroll(false);
  };
  window.addEventListener("scroll", handleScroll);
  const handleClick = (e) => {
    SetClick(!click);
  };
  return (
    <>
      <div className={onScroll ? "navbar navbar-scroll" : "navbar"}>
        <div className="navbar-container container">
          <Link to="/home" className="navbar-logo">
            <SiPaloaltosoftware className="navbar-icon" />
            HarshSingh
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-times" />
            )}
          </div>
          <ul
            onClick={handleClick}
            className={click ? "nav-menu active" : "nav-menu"}
          >
            <li onClick={handleClick} className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
            <li onClick={handleClick} className="nav-item">
              <Link to="/skills" className="nav-links">
                Skills
              </Link>
            </li>
            <li onClick={handleClick} className="nav-item">
              <Link to="/projects" className="nav-links">
                Projects
              </Link>
            </li>
            <li onClick={handleClick} className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
