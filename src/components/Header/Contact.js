import React, {useState} from "react"
import { contactInfo } from '../../resume-data'

const Contact = () => {
  const data = contactInfo[0]
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
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
          tabIndex="1"
          autofocus
          required
        />
        <input 
          type="text"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          tabIndex="2"
          autofocus
          required
        />
        <input 
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          tabIndex="3"
          autofocus
          required
        />
        <input 
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          tabIndex="3"
          autofocus
          required
        />
        <textarea 
          placeholder="Your message"
          cols="50"
          rows="12"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          tabIndex="4"
          autofocus
          required
        />
        <button onClick={e => checkEmail(e)}>Send It!</button>
      </form>
      <div className="social">
        <p className="contact-deet"><a href={`mailto: ${data.email}`}> {`${data.email}`}</a></p>
        <p className="contact-deet"><a href={data.github} target="_blank" rel="noreferrer">GitHub</a></p>
        <p className="contact-deet"><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </section>
  )
}

export default Contact;