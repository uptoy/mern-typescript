import axios from "axios";
import { Article } from "./Article";

const API = process.env.REACT_APP_API;

export const getArticles = async () => {
  return await axios.get<Article[]>(`${API}/articles`);
};

export const getArticleById = async (id: string) => {
  return await axios.get<Article>(`${API}/articles/${id}`);
};

export const createNewArticle = async (article: Article) => {
  return await axios.post(`${API}/articles`, article);
};

export const deleteArticleById = async (id: string) => {
  return await axios.delete(`${API}/articles/${id}`);
};

export const updateArticle = async (id: string, article: Article) => {
  return await axios.put(`${API}/articles/${id}`, article);
};