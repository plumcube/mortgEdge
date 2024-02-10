import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './Navbar'; // Adjust the path as necessary
import Page1 from './Page1';
import Page2 from './Page2';
// Import more pages as needed

// A wrapper component for handling route transitions
const AnimatedRoutes = () => {

  return (
    <div>
      <Navbar />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
