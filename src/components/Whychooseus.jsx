import React from 'react'
import image from '@images/twowomen.png'
import '@styles/_Whychooseus.scss'
import SectionTitle from './SectionTitle'
import WhyChooseUsBox from './WhyChooseUsBox'

const Whychooseus = () => {
  return (
    <div className="whychooseus">
    <div className="container">
        <section className="chooseus">
            <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
            <WhyChooseUsBox icon="fa-regular fa-thumbs-up" title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox icon="fa-light fa-star" title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox icon="fa-light fa-wand-magic-sparkles" title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
            <WhyChooseUsBox icon="fa-thin fa-head-side-gear" title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur." />
        </section>
        <div className="whychooseus-2">
            <section className="whychooseus-3">
                <img src={image} alt="Two women talking over a tablet" />
                <div className="backgroundbox"></div>
            </section>
        </div>
    </div>
</div>
  )
}

export default Whychooseus