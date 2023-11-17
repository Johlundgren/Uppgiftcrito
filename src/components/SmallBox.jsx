import React from 'react'
import '@styles/_SmallBox.scss'

const SmallBox = () => {
  return (
    <>  
     <div className="smallBoxContainer">
        <div className="smallBox">{'<'}</div>
        <div className="smallBox">1</div>
        <div className="smallBox">2</div>
        <div className="smallBox">3</div>
        <div className="smallBox">...</div>
        <div className="smallBox">9</div>
        <div className="smallBox">{'>'}</div>
    </div>

    </>
  )
}

export default SmallBox