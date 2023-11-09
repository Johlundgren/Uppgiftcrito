import React from 'react'
import { Link } from 'react-router-dom'; 

const TitleBox = ({url1, url2, description1, description2, title}) => {
  return (
    <div className="container">
        <div className="menu">
            <Link to={url1}>{description1}</Link>
            <Link to={url2}>{description2}</Link>
        </div>
        <h4>{title}</h4>
</div>
  )
}

export default TitleBox