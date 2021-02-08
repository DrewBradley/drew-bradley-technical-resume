import React from "react"

const Tech = (props) => {
  console.log(props)
  return(
      <h2 className="tech-name">{props.name}</h2>
  )
}

export default Tech