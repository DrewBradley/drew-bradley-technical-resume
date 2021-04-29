import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/drew-bradley-technical-resume" className="nav">Home</Link>
      <Link to="/projects" className="nav">Projects</Link>
      <Link to="/skills" className="nav">Skills and Education</Link>
      <Link to="/history" className="nav">Experience</Link>
      <Link to="/contact" className="nav">Contact</Link>
    </nav>
    )
  }

export default NavBar