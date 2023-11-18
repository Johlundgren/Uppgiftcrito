import React from 'react'
import '@styles/_SmallLinks.scss'

const SmallLinks = ({text1, text2, text3, text4, text5, text6}) => {
  return (
    <div className="container WorkLinksParent">
        <div className="WorkLinks">
             <p>{text1}</p>
        </div> 
        <div className="WorkLinks">
             <p>{text2}</p>
        </div> 
        <div className="WorkLinks">
             <p>{text3}</p>
        </div> 
        <div className="WorkLinks">
             <p>{text4}</p>
        </div> 
        <div className="WorkLinks">
             <p>{text5}</p>
        </div> 
        <div className="WorkLinks">
             <p>{text6}</p>
        </div> 
    </div>
  )
}

export default SmallLinks