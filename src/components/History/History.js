import React from "react"
import Workplace from "./Workplace"
import "./History.css"
import { workData } from "../../resume-data"

const History = () => {
  const workHistory = workData.map(place => {
    return <Workplace key={place.id} place={place} />
  })
  return(
    <div>
      <h1>Experience</h1>
      <div className="history-container">
        { workHistory }
      </div>
    </div>
  )
}

export default History