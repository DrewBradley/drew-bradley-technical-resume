import React from "react"


const Education = (props) => {
  return(
    <div className="school">
      <h2 className="school-name">{props.data.name}</h2>
      <p className="school-dates">{props.data.date}</p>
      <p className="school-details">{props.data.detail}</p>
    </div>
  )
}

export default Education