import React from 'react'
import woman from '@images/companywoman.png'

const Companyinfo = () => {
  return (
    <div className="main-container">
    <div className="companyinfo-section">
        <section className="company-section">
            <img src={woman} alt="Woman holding laptop walking corridor" />
            <div className="companychild-1">
                <div className="horizontal-info">
                <h3>Samantha Brown,</h3>
                <p className="companychild-p">Founder</p>
            </div>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </section>
    </div>
</div>

  )
}

export default Companyinfo