import React, { useEffect, useState } from 'react'
import '@styles/_NewsArticles.scss'

const NewsArticles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
   
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json())
    }

  return (
    <div className="container">
        <h2>Our News & Articles</h2>
        {
            articles.map(article => (
                
                <div className="newspic" key={article.id}>
                    <img src={article.imageUrl} alt={article.title} />
                    <p>{article.category}</p>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            ))
         }
    </div>
  )
}

export default NewsArticles