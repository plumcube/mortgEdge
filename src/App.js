import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './Navigation'; // Your Navigation component
import Homepage1 from './Homepage1';
import Homepage2 from './Homepage2';
import Homepage3 from './Homepage3';
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
                <Route exact path="/" component={Homepage1} />
                <Route path="/homepage2" component={Homepage2} />
                <Route path="/homepage3" component={Homepage3} />
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
