import React from "react"
import Project from "./Project"
import Featured from "./Featured"
import "./Project.css"
import { projectData } from "../../resume-data"

const ProjectContainer = () => {
  const projects = projectData.slice(3,7).map(project => {
    return <Project id={project.id} data={project} />
  })
  const featured = projectData.slice(0,3).map(project => {
    return <Featured id={project.id} data={project} />
  })
  return(
    <div className="project-container">
      { featured }
      { projects }
    </div>
  )
}

export default ProjectContainer