import React from 'react'
import '@styles/_Features.scss'
import SectionTitle from './SectionTitle'
import FeatureBox from './FeatureBox'
import BtnYellow from './BtnYellow'

const Features = () => {
  return (
    <div className="features">
    <div className="container">
    <section className="feature-section flex-section">
            <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies" />
            <div className="center-content">
            <BtnYellow title="Learn More" />
            </div>
    </section>
        <section className="feature-section grid-section">
            <FeatureBox icon="fa-light fa-handshake" title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"/>
            <FeatureBox icon="fa-sharp fa-light fa-lightbulb-on" title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
            <FeatureBox icon="fa-sharp fa-light fa-chart-mixed-up-circle-dollar" title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
            <FeatureBox icon="fa-light fa-cube" title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
        </section>
    </div>
    </div>
  )
}

export default Features