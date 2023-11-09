import React from 'react';
import '@styles/_Services.scss'
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <div className="service-section">
      <div className="container">
        <section className="service-rubrik">
          <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best <br /> Service For Consulting</h2>
          </div>
        </section>
        <section className="service-headlines">
          <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
          <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
          <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
          <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
        </section>
        <div className="center-content">
          <a className="btn-transparent" href="#">
            Browse Services
            <i className="fa-solid fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;