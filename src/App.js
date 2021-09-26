import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Week38 from './pages/2021/Week38';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/2021/week38'>
          <Week38 />
        </Route>
        <Route path='*'>
          <Week38 />
        </Route>
      </Switch>
    </Router>
  );
}
