import React from 'react'
import '../assets/styles/_Showcase.scss'
import imageone from '@images/bg-lines-left.svg'
import imagetwo from '@images/showcase-man.svg'
const Showcase = () => {
  return (
    <section className="showcase">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn more<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <img src={imagetwo} alt="man with a tablet" />
    </div>
</section>
  )
}

export default Showcase