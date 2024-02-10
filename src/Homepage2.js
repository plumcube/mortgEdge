import React from 'react';
import Navigation from './Navigation'; // Import navigation if it's a separate component

function Homepage2() {
  return (
    <div>
      <Navigation /> {/* Context-specific navigation */}
      <h1>Homepage 2 Content</h1>
      {/* Page content */}
    </div>
  );
}

export default Homepage2;
