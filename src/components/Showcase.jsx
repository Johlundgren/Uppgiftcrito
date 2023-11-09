import React from 'react'
import '@styles/_Showcase.scss'
import imageone from '@images/bg-lines-left.svg'
import imagetwo from '@images/showcase-man.svg'
import BtnYellow from './BtnYellow'
import BtnTrans from './BtnTrans'
const Showcase = () => {
  return (
    <section className="showcase">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <div className="content-buttons">
              <BtnYellow title="Get Consulting" />
              <BtnTrans title="Learn More" icon="fa-regular fa-arrow-up-right" />
            </div>
        </div>
        <img src={imagetwo} alt="man with a tablet" />
    </div>
</section>
  )
}

export default Showcase