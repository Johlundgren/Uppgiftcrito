import React from 'react'
import '@styles/_Companyinformation.scss'
import CompanyInfoBox from './CompanyInfoBox'

const Companyinformation = () => {
  return (
    <div className="company-information">
    <div className="container">
        <CompanyInfoBox icon="fa-thin fa-location-dot" title="Visit Us" text1="Sveavägen 31" text2="111 34 STOCKHOLM" />
        <CompanyInfoBox icon="fa-thin fa-phone" title="Call us" text1="+46 (8) 121 470 50" text2="+46 (8) 121 470 51" />
        <CompanyInfoBox icon="fa-thin fa-envelope" title="E-mail us" text1="info@crito.com" text2="support@crito.com" />
    </div>
</div>
  )
}

export default Companyinformation