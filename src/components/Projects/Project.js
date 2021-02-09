import React from "react"
import "./Project.css"

const Project = (props) => {
  console.log()
  return(
    <div className="project">
        <h1 className="project-name">{props.data.name}</h1>
      <div className="project-deets">
        <p>{props.data.description}</p>
      </div>
      <div className="project-links">
        <p><a href={props.data.deployed} target="_blank">{`${props.data.name}`}</a></p>
        <p><a href={props.data.github} target="_blank">GitHub Repository</a></p>
      </div>
    </div>
  )
}

export default Project