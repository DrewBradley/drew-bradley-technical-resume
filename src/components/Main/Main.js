import React from "react"
import Project from "../Projects/Project"
import "./Main.css"
import { projectData, bio } from "../../resume-data"

const Main = (props) => {
  const projects = projectData.map(project => {
    return <Project id={project.id} data={project} />
  })

  return(
    <div className="Main">
      <div className="BioCard">
        <img />
        <article>
          { bio.description }
        </article>
      </div>
      { projects[0] }
      { projects[2] }
    </div>
  )
}

export default Main