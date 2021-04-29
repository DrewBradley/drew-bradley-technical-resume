import React, {useState} from "react"
import { contactInfo } from '../../resume-data'

const Contact = () => {
  const data = contactInfo[0]
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const checkEmail = (event) => {
    event.preventDefault()
    if (email.includes('@')) {
      console.log("Email was successful!")
    } else {
      alert("Invalid email address")
    }
  }

  return(
    <section className="contact">
      <form className="contact-form">
        <input 
          type="text"
          placeholder="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          tabindex="1"
          required
        />
        <input 
          type="text"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          tabindex="2"
          required
        />
        <input 
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          tabindex="3"
          required
        />
        <textarea 
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          tabindex="1"
          required
        />
        <button onClick={e => checkEmail(e)}>Send It!</button>
      </form>
      <p className="contact-deet"><a href={`mailto: ${data.email}`}> {`${data.email}`}</a></p>
      <p className="contact-deet"><a href={data.github} target="_blank" rel="noreferrer">GitHub</a></p>
      <p className="contact-deet"><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
    </section>
  )
}

export default Contact;