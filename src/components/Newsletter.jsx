import React from 'react'
import '@styles/_Newsletter.scss'
import bglineright from '@images/bglineright.svg'
import BtnYellow from './BtnYellow'

const Newsletter = () => {
  return (
    <section className="newsletter">
    <img className="background-lines-right" src={bglineright} alt="squiggly lines right" />
    <div className="container">
        <h2>Get News Updates by Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <BtnYellow title="Subscribe" />
        </form>
    </div>
</section>
  )
}

export default Newsletter