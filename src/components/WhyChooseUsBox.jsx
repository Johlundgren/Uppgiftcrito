import React from 'react'

const WhyChooseUsBox = ({icon, title, description}) => {
  return (
    <div className="why-us-example">
    <div className="icon-container">
        <i className={icon}></i>
    </div>
    <div className="text-container">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>
  )
}

export default WhyChooseUsBox