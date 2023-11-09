import React from 'react'
import imageone from '@images/bg-lines-left.svg'
import '@styles/_Letsconnect.scss'
import TitleBox from './TitleBox';

const Letsconnect = () => {
  return (
    <div className="background-box">
    <img className="background-lines-left" src={imageone} alt="Squiggly Lines" />
    <TitleBox url1={"/"} url2={"/News"} description1="Home" description2="News" title="Lets Connect" />
</div>
  )
}

export default Letsconnect