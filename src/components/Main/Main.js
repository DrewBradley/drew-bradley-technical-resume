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
        <img className="headshot" src={ bio.image }/>
        <article>
          <h1>I am {bio.name}, and I am a {bio.title}!</h1>
          { bio.description }
        </article>
      </div>
      { projects[0] }
      { projects[1] }
    </div>
  )
}

export default Main