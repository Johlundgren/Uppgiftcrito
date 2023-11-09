import React from 'react'

const FeatureBox = ({icon, title, description}) => {
  return (
    <div className="feature">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div> 
  )
}

export default FeatureBox