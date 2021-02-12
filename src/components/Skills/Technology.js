import React from "react"

const Tech = ({name, img}) => {
  return(
    <div>
      <p className="tech-name">{name}</p>
      <img className="tech-logo" src={img} alt={`${name} logo`}/>
    </div>
  )
}

export default Tech