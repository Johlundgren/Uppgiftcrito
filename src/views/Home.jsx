import React from 'react'
import Header from '@components/Header'
import Showcase from '../components/Showcase'
import BusinessLogo from '../components/BusinessLogo'
import Features from '../components/Features'
import Services from '../components/Services'
import Whychooseus from '../components/Whychooseus'
import Projectandcase from '../components/Projectandcase'
import Meetourteam from '../components/Meetourteam'
import Testimonial from '../components/Testimonial'
import Articleandnews from '../components/Articleandnews'
import Newsletter from '../components/Newsletter'
import Footerlinks from '../components/Footerlinks'
import Footer from '../components/Footer'
import Companyinfo from '../components/Companyinfo'


const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <BusinessLogo />
        <Features />
        <Companyinfo />
        <Services />
        <Whychooseus />
        <Projectandcase />
        <Meetourteam />
        <Testimonial />
        <Articleandnews />
        <Newsletter />
        <Footerlinks />
        <Footer />

    </>
  )
}

export default Home