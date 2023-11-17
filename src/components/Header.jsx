import React from 'react'
import image from '@images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import '@styles/_Header.scss'
import BtnYellow from './BtnYellow';
import SocialMediaBox from './SocialMediaBox';

const Header = () => {
  return (
    
    <div className="wrapper-grid">
        <header>
            <div className="container">
                <button className="btn-menubars"><i className="fa-sharp fa-solid fa-bars-staggered"></i></button>
                <div className="logotype">
                    <a href="index.html">
                        <img src={image} alt="crito logotype" />
                    </a>
                </div>
                <div className="contactinformation-bar">
                    <div className="contact-info-box">
                        <i className="fa-light fa-phone-volume"></i>
                        +46 (8) 121 40 70
                    </div>
                    <div className="contact-info-box">
                        <i className="fa-light fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="contact-info-box last">
                        <i className="fa-light fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <SocialMediaBox />
                <div className="menu">
                <nav>
                  <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
                  <a to="" activeclassname="active">Service</a>
                  <NavLink to="/News" activeclassname="active">News</NavLink>
                  <NavLink to="/contact" activeclassname="active">Contact</NavLink>
               </nav>
                    <BtnYellow title="Login " />
                </div>
            </div>
        </header>
    </div>
  );
};

export default Header;