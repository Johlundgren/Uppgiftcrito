import React from 'react'
import newspaper from '@images/newspaper.png'
import smartwatch from '@images/smartwatch.png'
import penandpaper from '@images/penandpaper.png'
import pctablet from '@images/pctablet.png'
import '@styles/_Projectandcase.scss'
import SectionTitle from './SectionTitle'

const Projectandcase = () => {

  return (
    <div>
            <section className="project-and-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" description="Let's Look At Our Global Projects" />
           <div className="project-and-cases">
            <a className="project" href="#">
                <img src={newspaper} alt="A mans hand reading business paper" />
                <h3>Grow your business</h3>
                <div className="readmore">Read more <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={smartwatch} alt="Pink smartwatch" />
                <h3>Why your client needs a responsive website</h3>
                <div className="readmore">Read more <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={penandpaper} alt="Desk with office supplies" />
                <h3>Educate your employees to get better results</h3>
                <div className="readmore">Read more <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={pctablet} alt="Laptop with business intelligence insight" />
                <h3>Business Insights is a important piece of your business</h3>
                <div className="readmore">Read more <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
           </div>
           <div className="center-content">
            <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
           </div>
        </div>
    </section>
    </div>
  )
}

export default Projectandcase