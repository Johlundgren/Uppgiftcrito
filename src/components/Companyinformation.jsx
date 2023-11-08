import React from 'react'
import '@styles/_Companyinformation.scss'

const Companyinformation = () => {
  return (
    <div className="company-information">
    <div className="container">
        <div className="box">
            <div className="circle-mark">
                <i className="fa-thin fa-location-dot"></i>
            </div>
            <div className="boxtest">
                <h3>Visit Us</h3>
                <p>Sveavägen 31</p>
                <p>111 34 STOCKHOLM</p>
            </div>
        </div>
        <div className="box">
            <div className="circle-mark">
                <i className="fa-thin fa-phone"></i>
            </div>
            <div className="boxtest">
                <h3>Call us</h3>
                <p>+46 (8) 121 470 50</p>
                <p>+46 (8) 121 470 51</p>
            </div>
        </div>
        <div className="box">
            <div className="circle-mark">
                <i className="fa-thin fa-envelope"></i>
            </div>
            <div className="boxtest">
                <h3>Email us</h3>
                <p>info@crito.com</p>
                <p>support@crito.com</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Companyinformation