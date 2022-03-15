import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home/Home.js';

function App() {

  const TRACKING_ID = 'UA-222888625-2';

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
        <Route path="/" exact component={Home} />
    </Router>
  )
}

export default App;
