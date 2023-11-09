import React from 'react';

const ProjectBox = ({ imageSrc, title }) => {
  return (
    <a className="project" href="#">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="readmore">
        Read more <i className="fa-regular fa-arrow-up-right"></i>
      </div>
    </a>
  );
};

export default ProjectBox;
