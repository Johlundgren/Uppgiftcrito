import React from 'react'

const BtnTrans = ({title, icon}) => {
  return (
    <a className="btn-transparent" href="#">{title}<i className={icon}></i></a>
  )
}

export default BtnTrans