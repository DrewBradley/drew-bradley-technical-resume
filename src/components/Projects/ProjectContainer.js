import React from "react"
import Project from "./Project"
import "./Project.css"

const ProjectContainer = () => {
  // map over project data
  return(
    <div className="project-container">
      <h1>Projects</h1>
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  )
}

export default ProjectContainer