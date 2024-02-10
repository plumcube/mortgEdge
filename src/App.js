import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './Navigation'; // Your Navigation component
import Page1 from './Page1';
import Page2 from './Page2';
// Import more pages as needed

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Global navigation */}
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="slide">
              <Switch location={location}>
                <Route exact path="/" component={Page1} />
                <Route path="/page2" component={Page2} />
                {/* Define more routes as needed */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    </Router>
  );
}

export default App;
