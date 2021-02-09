import React from "react"
import Project from "./Project"
import "./Project.css"
import { projectData } from "../../resume-data"

const ProjectContainer = () => {
  const projects = projectData.map(project => {
    return <Project id={project.id} data={project} />
  })
  return(
    <div className="project-container">

      { projects }
    </div>
  )
}

export default ProjectContainer