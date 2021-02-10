import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/skills" className="nav edu">Education</Link>
      <Link to="/" className="nav projects">Projects</Link>
      <Link to="/history" className="nav history">Experience</Link>
    </nav>
    )
  }

export default NavBar