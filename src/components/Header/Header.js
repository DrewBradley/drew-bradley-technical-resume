import React from "react"
import Contact from "./Contact"
import NavBar from "./NavBar"
import './Header.css'

const Header = () => {
  return(
    <header className="header-container">
        <NavBar />
      <div className="title">
        <h1 className="title-name">Drew Bradley</h1>
        <h2>Software Developer</h2>
      </div>
    </header>
  )
}

export default Header;