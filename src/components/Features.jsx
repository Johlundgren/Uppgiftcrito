import React from 'react'
import '@styles/_Features.scss'

const Features = () => {
  return (
    <div className="features">
    <div className="container">
    <section className="feature-section flex-section">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <div className="center-content">
                <a className="btn-yellow" href="features.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
        <section className="feature-section grid-section">
            <div className="feature">
                <i className="fa-light fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div> 
            <div className="feature">
                <i className="fa-sharp fa-light fa-lightbulb-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="feature">
                <i className="fa-sharp fa-light fa-chart-mixed-up-circle-dollar"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="feature">
                <i className="fa-light fa-cube"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
        </section>
    </div>
    </div>
  )
}

export default Features