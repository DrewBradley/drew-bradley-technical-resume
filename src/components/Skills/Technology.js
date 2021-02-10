import React from "react"
import git from "./logos/git-logo.webp"
import html from "./logos/html-css-logo.png"
import js from "./logos/js-logo.png"
import chai from "./logos/mocha-chai-logo.png"
import node from "./logos/nodejs-logo.png"
import react from "./logos/react-logo.png"

const Tech = ({name, img}) => {
  console.log(img)
  return(
    <div>
      <p className="tech-name">{name}</p>
      <img className="tech-logo" src={img}/>
    </div>
  )
}

export default Tech