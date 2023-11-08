import React from 'react'
import Header from '@components/Header'
import Letsconnect from '../components/Letsconnect'
import Companyinformation from '../components/Companyinformation'
import Messageform from '../components/Messageform'
import Mappicture from '../components/Mappicture'
import Footerlinks from '../components/Footerlinks'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Header />
    <Letsconnect />
    <Companyinformation />
    <Messageform /> 
    <Mappicture />
    <Footerlinks />
    <Footer />
    </>  
  )
}

export default Contact