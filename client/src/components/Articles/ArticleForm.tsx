import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as ArticleService from "./ArticleService";
import { Article } from "./Article";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id?: string;
}

const ArticleForm = () => {
  const initialState = {
    title: "",
    description: ""
  };

  const [article, setArticle] = useState<Article>(initialState);

  const history = useHistory();
  const params = useParams<Params>();

  const getArticle = async (id: string) => {
    const res = await ArticleService.getArticleById(id);
    const { title, description} = res.data;
    setArticle({ title, description});
  };

  useEffect(() => {
    if (params.id) getArticle(params.id);
  }, [params.id]);

  const handleInputChange = (e: InputChange) =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await ArticleService.createNewArticle(article);
      setArticle(initialState);
      toast.success("New Article Added");
    } else {
      await ArticleService.updateArticle(params.id, article);
    }
    history.push("/articles");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>New Article</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this article"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={article.title}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={article.description}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;