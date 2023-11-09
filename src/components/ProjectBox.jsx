import React from 'react'

const ProjectBox = ({imageSrc, imageTitle, title, description}) => {
  return (
    <>
    <a className="project" href="#">
    <img src={imageSrc} alt={imageTitle} />
    <h3>{title}</h3>
    <div className="readmore">{description}<i className="fa-regular fa-arrow-up-right"></i></div>
    </a>
    </>
  )
}

export default ProjectBox