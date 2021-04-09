import React from "react"
import { contactInfo } from '../../resume-data'

const Contact = () => {
  const data = contactInfo[0]
  return(
    <section className="contact">
      <p className="contact-deet"><a href={`mailto: ${data.email}`}> {`${data.email}`}</a></p>
      <p className="contact-deet"><a href={data.github} target="_blank" rel="noreferrer">GitHub</a></p>
      <p className="contact-deet"><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
    </section>
  )
}

export default Contact;