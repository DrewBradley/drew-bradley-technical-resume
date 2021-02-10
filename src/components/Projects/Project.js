import React from "react"
import { projectData } from "../../resume-data"
import "./Project.css"

const Project = (props) => {
  console.log()
  return(
    <div className="project">
        <a className="project-gif-container" href={props.data.deployed} target="_blank"> <img className="project-gif" src={props.data.gif} /></a>
      <div className="project-deets">
        <h1 className="project-name">{props.data.name}</h1>
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