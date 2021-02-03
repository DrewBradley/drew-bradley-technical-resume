import React from "react"
import "./Project.css"

const Project = () => {
  return(
    <div className="project">
      <div className="project-deets">
        <h1 className="project-name">Project Name</h1>
        <p>Project deets</p>
      </div>
      <img className="project-pic" src="https://media.nature.com/lw800/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg" />
    </div>
  )
}

export default Project