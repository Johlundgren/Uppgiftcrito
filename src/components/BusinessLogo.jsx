import React from 'react'
import paperz from '@images/paperz.svg'
import dorfuz from '@images/dorfus.svg'
import martino from '@images/martino.svg'
import square from '@images/square.svg'
import gobona from '@images/gobona.svg'

const BusinessLogo = () => {
  return (
    <div className="logotypes">
    <div className="container mt-3">
        <div className="box box-1"><img src={paperz} alt="paperz logotype" /></div> 
        <div className="box box-2"><img src={dorfuz} alt="dorfuz logotype" /></div> 
        <div className="box box-3"><img src={martino} alt="martino logotype" /></div> 
        <div className="box box-4"><img src={square} alt="square logotype" /></div> 
        <div className="box box-5"><img src={gobona} alt="gobona logotype" /></div>
    </div>
</div>
  )
}

export default BusinessLogo