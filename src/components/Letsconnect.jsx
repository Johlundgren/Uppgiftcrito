import React from 'react'
import imageone from '@images/bg-lines-left.svg'
import '@styles/_Letsconnect.scss'
import { Link } from 'react-router-dom';

const Letsconnect = () => {
  return (
    <div className="background-box">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <div className="container">
        <div className="menu">
            <Link to="/" className="active">Home</Link>
            <Link to="/Contact">Contact</Link>
        </div>
        <h4>Let's Connect</h4>
</div>
</div>
  )
}

export default Letsconnect