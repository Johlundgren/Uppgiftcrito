import React from 'react';
import '@styles/_Meetourteam.scss'
import Team01 from '@images/Team01.png';
import Team02 from '@images/Team02.png';
import Team03 from '@images/Team03.png';
import Team04 from '@images/Team04.png';
import SectionTitle from './SectionTitle';
import Smallcircles from './Smallcircles';

const Meetourteam = () => {
  return (
    <div className="meet-section">
      <div className="container">
        <section className="meet-rubrik">
          <SectionTitle title="Meet our Team" description="Experience Team Members" />
            <a className="btn-transparent" href="team.html">Browse Team<i className="fa-solid fa-arrow-up-right"></i></a>
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
            <Smallcircles icon="fa-duotone fa-circle-small" />
            <Smallcircles icon="fa-sharp fa-solid fa-circle-small" />
            <Smallcircles icon="fa-duotone fa-circle-small" />
            <Smallcircles icon="fa-duotone fa-circle-small" />
            <Smallcircles icon="fa-duotone fa-circle-small" />
        </div>
      </div>
    </div>
  );
};

export default Meetourteam;