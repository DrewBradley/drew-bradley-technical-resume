import React from "react"
import Contact from "./Contact"
import './Header.css'

const Header = () => {
  return(
    <header className="header-container">
      <h1>Drew Bradley</h1>
      <h3>Software Developer</h3>
      <Contact />
    </header>
  )
}

export default Header;