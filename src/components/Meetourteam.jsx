import React from 'react';
import '@styles/_Meetourteam.scss'
import Team01 from '@images/Team01.png';
import Team02 from '@images/Team02.png';
import Team03 from '@images/Team03.png';
import Team04 from '@images/Team04.png';
import SectionTitle from './SectionTitle';
import Smallcircles from './Smallcircles';
import BtnTrans from './BtnTrans';
import Headshot from './Headshot';

const Meetourteam = () => {
  return (
    <div className="meet-section">
      <div className="container">
        <section className="meet-rubrik">
          <SectionTitle title="Meet our Team" description="Experience Team Members" />
          <BtnTrans title="Browse Team" icon="fa-solid fa-arrow-up-right" />
        </section>
        <section className="meet-headshots">
          <Headshot imageSrc={Team01} name="Kristine Palmer" title="Chef Operation Officer" />
          <Headshot imageSrc={Team02} name="Mark Aubri" title="Senior Consultant" />
          <Headshot imageSrc={Team03} name="Kimberly Hansen" title="Senior Consultant" />
          <Headshot imageSrc={Team04} name="Justin Willoman" title="Senior Tech Consultant" />
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