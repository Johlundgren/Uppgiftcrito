import React from 'react';
import companywoman from '@images/companywoman.png';

const Companyinfo = () => {
  return (
    <div className="main-container">
    <div className="companyinfo-section">
      <section className="company-section">
        <img src={companywoman} alt="Woman holding laptop walking corridor" />
        <div className="companychild-1">
          <div className="horizontal-info">
            <h3>Samantha Brown,</h3>
            <p className="companychild-p">Founder</p>
          </div>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
        </div>
      </section>
    </div>
    <div className="secondcontainer">
      <section className="about-company">
        <div className="section-title">
          <p>About Company</p>
          <h2>We Are Business Consulting & Credit Repair Experts</h2>
        </div>
        <div className="company-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
          </p>
        </div>
        <div className="btn-company">
          <a className="btn-black" href="company.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
          <a className="btn-transparent" href="services.html">
            <i className="fa-sharp fa-solid fa-play"></i>
          </a>
          <p>Intro Video</p>
        </div>
      </section>
    </div>
  </div>
  );
};

export default Companyinfo;