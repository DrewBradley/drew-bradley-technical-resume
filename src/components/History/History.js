import React from "react"
import Workplace from "./Workplace"
import historyData from "./history-data"
import "./History.css"

const History = () => {
  const workHistory = historyData.map(place => {
    return <Workplace key={place.id} place={place} />
  })
  return(
    <div className="history-container">
      { workHistory }
    </div>
  )
}

export default History