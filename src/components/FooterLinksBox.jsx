import React from 'react'

const FooterLinksBox = ({title, description, description1, description2, description3}) => {
  return (
    <div className="crito-rubrik">
    <h3>{title}</h3>
    <a href="#">{description}</a>
    <a href="#">{description1}</a>
    <a href="#">{description2}</a>
    <a href="#">{description3}</a>
</div>
  )
}

export default FooterLinksBox