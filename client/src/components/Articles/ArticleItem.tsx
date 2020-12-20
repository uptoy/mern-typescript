import React from 'react'
import {Article} from './Article'

interface Props{
    article:Article
}

const ArticleItem = ({article}:Props) =>{
    return(
        <div>
            <h1>{article.title}</h1>
            <h1>{article.description}</h1>
        </div>
    )
}

export default ArticleItem