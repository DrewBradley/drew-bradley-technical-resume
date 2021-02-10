import React from "react"
import "./Skills.css"
import Technology from "./Technology"
import Education from "./Education"
import { schoolData, techData } from "../../resume-data.js"


const Skills = () => {
  const schools = schoolData.map(school => <Education  key={school.id} data={school} />)
  const tech = techData.map(tech => <Technology  key={tech.id} name={tech.name} img={tech.img}/>)
  return(
    <section className="skills">
      <article className="tech-container">
        <h1>Technologies</h1>
        <div className="tech-box">
          { tech }
        </div>
      </article>
      <article className="edu-container">
      <h1>Education</h1>
      <div>
        { schools }
      </div>
      </article>
    </section>
  )
}

export default Skills