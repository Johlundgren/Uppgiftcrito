import React from 'react';
import '@styles/_Messageform.scss'

const Messageform = () => {
  return (
    <div className="form-message">
      <div className="container">
        <form>
          <h1>Leave us a message<br></br> for any information.</h1>
          <div className="input-group">
            <input type="text" id="username" placeholder="Name" />
          </div>
          <div className="input-group">
            <input type="email" id="email" placeholder="E-mail" />
          </div>
          <div className="input-group">
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
      </div>
    </div>
  );
}

export default Messageform;