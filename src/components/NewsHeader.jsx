import React from 'react'
import imageone from '@images/bg-lines-left.svg'
import '@styles/_Letsconnect.scss'
import TitleBox from './TitleBox';

const NewsHeader = () => {
  return (
    <div className="background-box">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <TitleBox url1={"/"} url2={"/Contact"} description1="Home" description2="Contact" title="News & Articles" />
</div>
  )
}

export default NewsHeader