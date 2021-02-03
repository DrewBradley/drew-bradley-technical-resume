import React from "react"
import "./Workplace.css"

const Workplace = (props) => {
  return(
    <div className="workplace">
      <p>{props.place.name}</p>
      <p>{props.place.dates}</p>
      <p>{props.place.description}</p>
    </div>
  )
}

export default Workplace