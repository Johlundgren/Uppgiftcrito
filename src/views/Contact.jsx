import React from 'react'
import Header from '@components/Header'
import Companyinformation from '../components/Companyinformation'
import Messageform from '../components/Messageform'
import Mappicture from '../components/Mappicture'
import Footerlinks from '../components/Footerlinks'
import Footer from '../components/Footer'
import NewsHeader from '../components/NewsHeader'

const Contact = () => {
  return (
    <>
    <Header />
    <NewsHeader url1={"/"} url2={"/News"} description1="Home" description2="News" title="Contact" />
    <Companyinformation />
    <Messageform /> 
    <Mappicture />
    <Footerlinks />
    <Footer />
    </>  
  )
}

export default Contact