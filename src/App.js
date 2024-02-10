import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1'; // Your first page component
import Page2 from './Page2'; // Your second page component
// Import more pages as needed

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* Define more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
