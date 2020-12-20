import React,{useEffect,useState} from 'react';
import {Article} from './Article'
import * as articleService from './ArticleService'
import ArticleItem from './ArticleItem'

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
        return <ArticleItem article={article}/>
      })}
    </div>
  );
}

export default ArticleList;
