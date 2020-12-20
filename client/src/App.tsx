import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ArticleList from './components/Articles/ArticleList'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/" component={ArticleList} />
        <Route path ="/" component={ArticleList} />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
