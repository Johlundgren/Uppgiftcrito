import React from 'react'
import newspaper from '@images/newspaper.png'
import smartwatch from '@images/smartwatch.png'
import penandpaper from '@images/penandpaper.png'
import pctablet from '@images/pctablet.png'
import '@styles/_Projectandcase.scss'
import SectionTitle from './SectionTitle'
import ProjectBox from './ProjectBox'
import BtnBlack from './BtnBlack'

const Projectandcase = () => {

  return (
    <div>
            <section className="project-and-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" description="Let's Look At Our Global Projects" />
           <div className="project-and-cases">
            <a className="project" href="#">
                <img src={newspaper} alt="A mans hand reading business paper" />
                <ProjectBox title="Grow your business" description="Read more" />
            </a>
            <a className="project" href="#">
                <img src={smartwatch} alt="Pink smartwatch" />
                <ProjectBox title="Why your client needs a responsive website" description="Read more" />
            </a>
            <a className="project" href="#">
                <img src={penandpaper} alt="Desk with office supplies" />
                <ProjectBox title="Educate your employees to get better results" description="Read more" />
            </a>
            <a className="project" href="#">
                <img src={pctablet} alt="Laptop with business intelligence insight" />
                <ProjectBox title="Business Insights is a important piece of your business" description="Read more" />
            </a>
           </div>
           <div className="center-content">
            <BtnBlack title="All Recent Projects" />
           </div>
        </div>
    </section>
    </div>
  )
}

export default Projectandcase