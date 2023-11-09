import React from 'react'

const ArticleNewsBox = ({paratitle, title, para}) => {
  return (
    <>
        <p>{paratitle}</p>
        <h3>{title}</h3>
        <p>{para}</p>
    </>
  )
}

export default ArticleNewsBox