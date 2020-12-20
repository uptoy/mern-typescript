import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ArticleList from './components/Articles/ArticleList'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'App.css'
import NavBar from '.components/NavBar/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NavBar />
        <Route path ="/" component={ArticleList} />
        <Route path ="/" component={ArticleList} />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
