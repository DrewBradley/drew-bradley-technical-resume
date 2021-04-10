import React from "react"
import "./Project.css"

const Featured = (props) => {
  return(
    <div className="project">
        <a 
          className="project-gif-container" 
          href={props.data.deployed} 
          target="_blank" 
          rel="noreferrer"> 
          <img 
            className="project-gif" 
            src={props.data.gif} 
            alt={`Preview of ${props.data.name}`}/>
        </a>
      <div className="project-deets">
        <p className="project-name">{props.data.name}</p>
        <p className="project-desc">{props.data.description}</p>
      </div>
      <div className="project-links">
        <p><a 
          href={props.data.deployed} 
          target="_blank" 
          rel="noreferrer">
            {`${props.data.name}`}
        </a></p>
        <p><a 
          href={props.data.github} 
          target="_blank" 
          rel="noreferrer">GitHub Repository
        </a></p>
      </div>
    </div>
  )
}

export default Featured