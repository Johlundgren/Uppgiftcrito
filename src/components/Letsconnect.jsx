import React from 'react'
import imageone from '@images/bg-lines-left.svg'
import '@styles/_NewsHeader.scss'
import { Link } from 'react-router-dom'; 

const Letsconnect = ({url1, url2, description1, description2, title}) => {
  return (
    <div className="background-box">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <div className="container">
        <div className="menu">
            <Link to={url1}>{description1}</Link>
            <Link to={url2}>{description2}</Link>
        </div>
        <h4>{title}</h4>
</div>
</div>
  )
}

export default Letsconnect