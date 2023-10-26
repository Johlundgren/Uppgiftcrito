import React from 'react'
import image from '@images/twowomen.png'

const Whychooseus = () => {
  return (
    <div className="whychooseus">
    <div className="container">
        <section className="chooseus">
            <div className="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
            <div className="why-us-example">
                <div className="icon-container">
                    <i className="fa-regular fa-thumbs-up"></i>
                </div>
                <div className="text-container">
                    <h3>Process Excellence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="why-us-example">
                <div className="icon-container">
                    <i className="fa-light fa-star"></i>
                </div>
                <div className="text-container">
                    <h3>Strategic Planning</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="why-us-example">
                <div className="icon-container">
                    <i className="fa-light fa-wand-magic-sparkles"></i>
                </div>
                <div className="text-container">
                    <h3>Experience Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="why-us-example">
                <div className="icon-container">
                    <i className="fa-thin fa-head-side-gear"></i>
                </div>
                <div className="text-container">
                    <h3>Artificial Intelligence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </section>
        <div className="whychooseus-2">
            <section className="whychooseus-3">
                <img src={image} alt="Two women talking over a tablet" />
                <div className="backgroundbox"></div>
            </section>
        </div>
    </div>
</div>
  )
}

export default Whychooseus