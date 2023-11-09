import React from 'react'
import image from '@images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import '@styles/_Header.scss'

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
                <div className="socialmedia-bar">
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="menu">
                <nav>
              <NavLink to="/" exact="true" activeclassname="active">
                Home
              </NavLink>
              <a href="services.html">Services</a>
              <a href="news.html">News</a>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </nav>
                    <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </header>
    </div>
  );
};

export default Header;