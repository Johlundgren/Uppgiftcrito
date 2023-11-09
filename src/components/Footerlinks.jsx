import React from 'react'
import '@styles/_Footerlinks.scss'
import critologo from '@images/critologofooter.svg'
import bglinesright from '@images/bglinesright.svg'
import FooterLinksBox from './FooterLinksBox'

const Footerlinks = () => {
  return (
    <section className="crito-section">
    <div className="container">
        <div className="crito-logo-section">
            <img src={critologo} alt="Crito Logotype" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <FooterLinksBox title="Company" description="About" description1="Features" description2="Works" description3="Career" />
        <FooterLinksBox title="Help" description="Customer Support" description1="Delivery Details" description2="Terms & Conditions" description3="Privacy Policy" />
        <FooterLinksBox title="Resources" description="Free eBooks" description1="Development Tutorial" description2="How to - Blog" description3="Youtube Playlist" />
        <FooterLinksBox title="Resources" description="Free eBooks" description1="Development Tutorial" description2="How to - Blog" description3="Youtube Playlist" />
        <div className="background-images-right">
            <img src={bglinesright} alt="Background lines right" />
        </div>
    </div>
</section>
  )
}

export default Footerlinks