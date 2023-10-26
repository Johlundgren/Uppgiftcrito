import React from 'react';

const Services = () => {
  return (
    <div className="service-section">
      <div className="container">
        <section className="service-rubrik">
          <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best <br></br> Service For Consulting</h2>
          </div>
        </section>
        <section className="service-headlines">
          <div className="service">
            <h3>Business Advice</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.
            </p>
            <a className="btn-black" href="business.html">
              <i className="fa fa-light fa-arrow-right"></i>
            </a>
          </div>
          <div className="service">
            <div className="service-yellow">
              <h3>Startup Business</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis in nam possimus.
              </p>
              <a className="btn-transparent" href="startup.html">
                <i className="fa fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="service">
            <h3>Financial Advice</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.
            </p>
            <a className="btn-black" href="financialadvice.html">
              <i className="fa fa-light fa-arrow-right"></i>
            </a>
          </div>
          <div className="service">
            <h3>Risk Management</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.
            </p>
            <a className="btn-black" href="riskmanagement.html">
              <i className="fa fa-light fa-arrow-right"></i>
            </a>
          </div>
        </section>
        <div className="center-content">
          <a className="btn-transparent" href="services.html">
            Browse Services
            <i className="fa-solid fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;