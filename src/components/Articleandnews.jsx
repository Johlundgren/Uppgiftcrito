import React from 'react'
import '@styles/_Articleandnews.scss'
import mar from '@images/mar25.png';
import mar17 from '@images/mar17.png';
import mar13 from '@images/mar13.png';
import SectionTitle from './SectionTitle';
import ArticleNewsBox from './ArticleNewsBox';
import Smallcircles from './Smallcircles';
import BtnTrans from './BtnTrans';

const Articleandnews = () => {
  return (
    <div className="articlenews-section">
    <div className="container">
        <section className="articlenews-rubrik">
            <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
            <BtnTrans title="Browse Articles" icon="fa-regular fa-arrow-up-right" />
        </section>
        <section className="articlenews-showcase">
            <div className="articleimages">
                <img src={mar} alt="Woman smiling at a desk" />
                <ArticleNewsBox paratitle="Business" title={<span>How To Use Digitalization<br />In The Classroom</span>} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero" />
                </div>
                <div className="articleimages">
                <img src={mar17} alt="Capabilities" />
                <ArticleNewsBox paratitle="Business" title={<span>How To Implement Chat GPT<br />In Your Projects</span>} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero" />
                </div>
                <div className="articleimages">
                <img src={mar13} alt="Iphone on books" />
                <ArticleNewsBox paratitle="Business" title={<span>The Guide To Support<br></br>Modern CSS Design</span>} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero" />
                </div>
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

export default Articleandnews;