import React from "react"

const Tech = (props) => {
  console.log(props)
  return(
      <p className="tech-name">{props.name}</p>
  )
}

export default Tech