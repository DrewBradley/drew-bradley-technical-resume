import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/drew-bradley-technical-resume" className="nav projects">Projects</Link>
      <Link to="/skills" className="nav edu">Skills and Education</Link>
      <Link to="/history" className="nav history">Experience</Link>
    </nav>
    )
  }

export default NavBar