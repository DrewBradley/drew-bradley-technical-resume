import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/drew-bradley-technical-resume" className="contact-deet">Home</Link>
      <Link to="/projects" className="contact-deet">Projects</Link>
      <Link to="/skills" className="contact-deet">Skills and Education</Link>
      <Link to="/history" className="contact-deet">Experience</Link>
    </nav>
    )
  }

export default NavBar