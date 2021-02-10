import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="drew-bradley-technical-resume/skills" className="nav edu">Education</Link>
      <Link to="drew-bradley-technical-resume/" className="nav projects">Projects</Link>
      <Link to="drew-bradley-technical-resume/history" className="nav history">Experience</Link>
    </nav>
    )
  }

export default NavBar