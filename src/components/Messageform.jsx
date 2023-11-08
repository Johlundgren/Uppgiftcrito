import React, { useState } from 'react'
import '@styles/_Messageform.scss'

const Messageform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [messageSent, setMessageSent] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !message) {
      alert('Looks like you missed a field!');
      return;
    }

    try {
      const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 200) {
        console.log('Message Success!')
        setMessageSent(true)
      } else {
        console.log('The provided data is invalid')
      }
    } catch (error) {
      console.error('Something went wrong', error)
    }
  }

  return (
    <div className="form-message">
      <div className="container">
        {messageSent ? (
          <div className="success-message">Message has been sent, thank you for your information!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Leave us a message<br /> for any information.</h1>
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                value={message}
                placeholder="Your Message"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Messageform
