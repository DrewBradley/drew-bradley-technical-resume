import React, {useState} from "react"
import * as emailjs from 'emailjs-com';
import { contactInfo } from '../../resume-data'

const Contact = () => {
  const data = contactInfo[0]
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  emailjs.init("user_QJViOsyazMNdU9XLsF1KH");

  const checkEmail = () => {
    if (email.includes('@')) {
      console.log("Email was successful!")
    } else {
      alert("Invalid email address")
      return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    checkEmail()
    const templateParams = {
      from_name: `${first} ${last}`,
      from_email: email,
      to_name: "Drew",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      'service_f925vgp',
      'template_zwugc1b',
       templateParams,
      'user_QJViOsyazMNdU9XLsF1KH'
    )
    resetForm();
  };

  const resetForm = () => {
    setFirst("")
    setLast("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return(
    <section className="contact">
      <form className="contact-form">
        <section className="form-info">
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
          <button onClick={e => handleSubmit(e)}>Send It!</button>
        </section>
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
      </form>
      <div className="social">
        <p className="contact-deet"><a href={data.github} target="_blank" rel="noreferrer">GitHub</a></p>
        <p className="contact-deet"><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </section>
  )
}

export default Contact;