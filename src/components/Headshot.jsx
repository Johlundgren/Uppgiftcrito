import React from 'react'

const Headshot = ({imageSrc, name, title}) => {
  return (
    <div className="headshots">
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p>{title}</p>
  </div>
  )
}

export default Headshot