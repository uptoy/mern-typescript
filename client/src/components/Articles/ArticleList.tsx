import React,{useEffect,useState} from 'react';
import {Article} from './Article'
import * as articleService from './ArticleService'

const ArticleList = () => {

  const [articles,setArticles] = useState<Article[]>([])
  const loadArticles = async()=>{
    const res = await articleService.getArticles()
    setArticles(res.data)
  }

  useEffect(()=>{
    loadArticles()
  },[])
  return (
    <div>
      {articles.map((article)=>{
        <div>
          <h1>{article.title}</h1>
        </div>
      })}
    </div>
  );
}

export default ArticleList;
