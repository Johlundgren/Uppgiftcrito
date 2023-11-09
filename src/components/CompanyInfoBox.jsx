import React from 'react'

const CompanyInfoBox = ({icon, title, text1, text2}) => {
  return (
    <div className="box">
    <div className="circle-mark">
        <i className={icon}></i>
    </div>
    <div className="boxtest">
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
</div>
  )
}

export default CompanyInfoBox