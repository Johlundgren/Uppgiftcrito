import React from 'react'
import '@styles/_Testimonial.scss'
import client1 from '@images/client1.png'
import client2 from '@images/client2.png'
import client3 from '@images/client3.png'
import SectionTitle from './SectionTitle'

const Testimonial = () => {
  return (
    <div className="testimonial-section">
    <div className="container">
        <section className="testimonial-rubrik">
            <SectionTitle title="Testimonial" description="What Our Client Says" />
        </section>
        <section className="client-reviews">
            <img src={client1} alt="Client review 1" />
            <img src={client2} alt="Client review 2" />
            <img src={client3} alt="Client review 3" />
        </section>
        <div className="center-content">
            <a className="btn-black" href="allreviews.html">All Reviews<i className="fa-solid fa-arrow-up-right"></i></a>
        </div> 
    </div>
</div>
  )
}

export default Testimonial