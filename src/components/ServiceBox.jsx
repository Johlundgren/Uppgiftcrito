import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn-black" href={url}>
        <i className="fa fa-light fa-arrow-right"></i>
        </a>
  </div>
  )
}

export default ServiceBox