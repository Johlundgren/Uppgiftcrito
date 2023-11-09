import React from 'react';
import '@styles/_Companyinfo.scss'
import companywoman from '@images/companywoman.png';
import SectionTitle from './SectionTitle';
import BtnBlack from './BtnBlack';
import BtnTrans from './BtnTrans';

const Companyinfo = () => {
  return (
    <div className="container">
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
            <SectionTitle title="About Company" description={<span>We Are Business<br />Consulting & Credit<br />Repair Experts</span>}/>
                <div className="company-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br />officiis quas assumenda esse obcaecati? Ex esse error voluptates iure<br />vel totam eos.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse<br />quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>
                <div className="btn-company">
                    <BtnBlack title="Learn More" />
                    <BtnTrans icon="fa-sharp fa-solid fa-play" />
                    <p>Intro Video</p>
                </div>
            </section>
        </div>
    </div>
</div>
  );
};

export default Companyinfo;