import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App;
