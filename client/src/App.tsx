import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ArticleList from './components/Articles/ArticleList'
import NavBar from './components/NavBar/NavBar'
import "react-toastify/dist/ReactToastify.css";
import 'animate.css/animate.min.css';
import "./index.css";
import 'bootswatch/dist/pulse/bootstrap.min.css'
import ArticleForm from "./components/Articles/ArticleForm";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container p-4">
        <Switch>
          <Route exact path={["/", "/articles"]} component={ArticleList} />
          <Route path="/new-article" component={ArticleForm} />
          <Route path="/update/:id" component={ArticleForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
    );
}

export default App;
