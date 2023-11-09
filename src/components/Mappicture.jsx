import React from 'react'
import mappicture from '@images/maprectangle.png'
import '@styles/_Mappicture.scss'

const Mappicture = () => {
  return (
<div className="map-picture">
    <img src={mappicture} alt="Map of Stockholm" />
</div>
  )
}

export default Mappicture