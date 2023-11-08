import React, { useState } from 'react'
import '@styles/_Messageform.scss'

const Messageform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        console.log('Message Success!');
      } else {
        console.log('Oops, something went wrong with the message');
      }
    } catch (error) {
      console.error('Something went wrong', error);
    }
  }

  return (
    <div className="form-message">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Leave us a message<br></br> for any information.</h1>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Messageform
