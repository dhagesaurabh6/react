import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Header}></Route>
      <Route path="/login" exact component={Login}></Route>
    </Router>
   
  );
}

export default App;
