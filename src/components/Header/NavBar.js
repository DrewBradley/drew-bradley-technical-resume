import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/skills" className="nav">Education</Link>
      <Link to="/" className="nav">Projects</Link>
      <Link to="/history" className="nav">Experience</Link>
    </nav>
    )
  }

export default NavBar