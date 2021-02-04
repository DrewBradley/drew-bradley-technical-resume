import React from "react"
import "./Skills.css"
import Technology from "./Technology"
import Education from "./Education"

const Skills = () => {
  return(
    <section className="skills">
      <article className="tech-container">
        <h1>Technologies</h1>
        <Technology />      
        <Technology />
        <Technology />
        <Technology />
      </article>
      <article className="edu-container">
        <Education />
        <Education />
      </article>
    </section>
  )
}

export default Skills