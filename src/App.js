import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Week38 from './pages/2021/Week38';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/2021/nov20-26'>
          <Week38 />
        </Route>
        <Route path='*'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
