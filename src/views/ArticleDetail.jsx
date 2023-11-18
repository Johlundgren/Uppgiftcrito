import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import NewsHeader from '../components/NewsHeader'
import Footerlinks from '../components/Footerlinks'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import '@styles/_ArticleDetail.scss'
import LoremContent from '../components/LoremContent'

const ArticleDetail = () => {
    const [article, setArticle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200)
                setArticle(await result.json())
        }
    }



  return (
    <>
    <Header />
    <NewsHeader url1={"/"} url2={"/News"} description1="Home" description2="News" title="News & Articles"/>
    <div className="container ArticleDetails">
        <div className="articleTitle"><h3>{article.title}</h3></div>
        <div className="articleTexts">
        <div className="articleText"><p>{article.published}</p></div>
        <div className="articleText"><p>{article.category}</p></div>
        <div className="articleText"><p>{article.author}</p></div>
        </div>
        <div className="articleImage"><img src={article.imageUrl} alt={article.title} /></div>
        <div className="articleContent"><p>{article.content}</p></div>
    </div>
    <LoremContent />
    <Footerlinks />
    <Footer />
    </>
  )
}

export default ArticleDetail