import React from 'react'
import '@styles/_Newsletter.scss'
import bglineright from '@images/bglineright.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
    <img className="background-lines-right" src={bglineright} alt="squiggly lines right" />
    <div className="container">
        <h2>Get News Updates by Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <button className="btn-yellow">Subscribe<i className="fa-solid fa-arrow-up-right"></i></button> 
        </form>
    </div>
</section>
  )
}

export default Newsletter