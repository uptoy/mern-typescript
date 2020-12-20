import {Response,RequestHandler} from 'express'
import Article from './controllers/Article'


export const createArticle:RequestHandler = async(req,res)=>{
    const articleFound = await Article.findOne({url:req.body.url})
    if(articleFound)
        return res.status(303).json({message:"article alresdy exits"})

    const newArticle = new Article(req.body)
    const savedArticle = await newArticle.save()
    res.json(savedArticle)
    }

export const getArticles:RequestHandler = async(req,res)=>{
    try{
        const articles = await Article.find()
        return res.json(articles)
    }catch(error){
        res.json(error)
    }
}


export const getArticle:RequestHandler = async(req,res)=>{
    const articleFound = await Article.findById(req.params.id)

    if(!articleFound)return res.status(204).json()

    return res.json(articleFound)
}


export const deleteArticle:RequestHandler = async(req,res)=>{
    const articleFound = await Article.findByIdAndDelete(req.params.id)

    if(!articleFound)return res.status(204).json()

    return res.status(204).json()
}

export const updateArticle: RequestHandler = async (req,res)
: Promise<Response> => {
  const articleUpdated = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!articleUpdated) return res.status(204).json();
  return res.json(articleUpdated);
};