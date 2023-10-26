import React from 'react'
import critologo from '@images/critologofooter.svg'
import bglinesright from '@images/bglinesright.svg'

const Footerlinks = () => {
  return (
    <section className="crito-section">
    <div className="container">
        <div className="crito-logo-section">
            <img src={critologo} alt="Crito Logotype" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <div className="crito-rubrik">
            <h3>Company</h3>
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="works.html">Works</a>
            <a href="career.html">Career</a>
        </div>
        <div className="crito-rubrik">
            <h3>Help</h3>
            <a href="support.html">Customer Support</a>
            <a href="delivery.html">Delivery Details</a>
            <a href="toc.html">Terms & Conditions</a>
            <a href="policy.html">Privacy Policy</a>
        </div>
        <div className="crito-rubrik">
            <h3>Resources</h3>
            <a href="ebooks.html">Free eBooks</a>
            <a href="development.html">Development Tutorial</a>
            <a href="howtoblog.html">How to - Blog</a>
            <a href="playlist.html">Youtube Playlist</a>
        </div>
        <div className="crito-rubrik">
            <h3>Link</h3>
            <a href="ebooks.html">Free eBooks</a>
            <a href="development.html">Development Tutorial</a>
            <a href="howtoblog.html">How to - Blog</a>
            <a href="playlist.html">Youtube Playlist</a>
        </div>
        <div className="background-images-right">
            <img src={bglinesright} alt="Background lines right" />
        </div>
    </div>
</section>
  )
}

export default Footerlinks