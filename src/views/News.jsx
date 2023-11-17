import React from 'react'
import Header from '../components/Header'
import NewsHeader from '@components/NewsHeader'
import Footerlinks from '@components/Footerlinks'
import Footer from '../components/Footer'
import NewsArticles from '../components/NewsArticles'
import SmallBox from '../components/SmallBox'
import Newsletter from '../components/Newsletter'

const News = () => {
  return (
    <>
     <Header />
     <NewsHeader url1={"/"} url2={"/Contact"} description1="Home" description2="Contact" title="News & Articles" />
     <NewsArticles />
     <SmallBox />
     <Newsletter />
     <Footerlinks />
     <Footer />
    </>
  )
}

export default News