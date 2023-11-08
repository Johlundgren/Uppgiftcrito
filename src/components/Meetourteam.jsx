import React from 'react';
import '@styles/_Meetourteam.scss'
import Team01 from '@images/Team01.png';
import Team02 from '@images/Team02.png';
import Team03 from '@images/Team03.png';
import Team04 from '@images/Team04.png';

const Meetourteam = () => {
  return (
    <div className="meet-section">
      <div className="container">
        <section className="meet-rubrik">
          <div className="section-title">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
            <a className="btn-transparent" href="team.html">Browse Team<i className="fa-solid fa-arrow-up-right"></i></a>
          </div>
        </section>
        <section className="meet-headshots">
          <div className="headshots">
            <img src={Team01} alt="Kristine Palmer" />
          </div>
          <div className="headshots">
            <img src={Team02} alt="Mark Aubri" />
          </div>
          <div className="headshots">
            <img src={Team03} alt="Kimberly Hansen" />
          </div>
          <div className="headshots">
            <img src={Team04} alt="Justin Willoman" />
          </div>
        </section>
        <div className="center-content">
          <div className="smallcircles">
            <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
          </div>
          <div className="smallcircles">
            <a href="nextslide.html"><i className="fa-sharp fa-solid fa-circle-small"></i></a>
          </div>
          <div className="smallcircles">
            <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
          </div>
          <div className="smallcircles">
            <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
          </div>
          <div className="smallcircles">
            <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetourteam;