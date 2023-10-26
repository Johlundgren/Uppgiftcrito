import React from 'react'
import mar from '@images/mar25.png';
import mar17 from '@images/mar17.png';
import mar13 from '@images/mar13.png';

const Articleandnews = () => {
  return (
    <div className="articlenews-section">
    <div className="container">
        <section className="articlenews-rubrik">
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Articles & News</h2>
                <a className="btn-transparent" href="articles.html">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
        </section>
        <section className="articlenews-showcase">
            <div className="articleimages">
                <img src={mar} alt="Woman smiling at a desk" />
                <p>Business</p>
                <h3>How To Use Digitalization<br></br>In The Classroom</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero</p>
                </div>
                <div className="articleimages">
                <img src={mar17} alt="Capabilities" /> 
                <p>Business</p>
                <h3>How To Implement Chat GPT<br></br>In Your Projects</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero</p>
                </div>
                <div className="articleimages">
                <img src={mar13} alt="Iphone on books" />
                <p>Business</p>
                <h3>The Guide To Support<br></br>Modern CSS Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero</p>
                </div>
        </section>
        <div className="center-content">
            <div className="smallcircles">
                <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
                </div>
                <div className="smallcircles">
                    <a href="nextslide.html"><i className="fa-sharp fa-solid fa-circle-small"></i></a>
                </div>
                <div className="smallcircles">
                    <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
                </div>
                <div className="smallcircles">
                    <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
                </div>
                <div className="smallcircles">
                    <a href="nextslide.html"><i className="fa-duotone fa-circle-small"></i></a>
                </div>
            </div>
    </div>
</div>
  );
};

export default Articleandnews;