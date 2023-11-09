import React from 'react'

const ProjectBox = ({title, description}) => {
  return (
    <>
    <h3>{title}</h3>
    <div className="readmore">{description}<i className="fa-regular fa-arrow-up-right"></i></div>
    </>
  )
}

export default ProjectBox