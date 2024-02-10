import React from 'react';
import Navigation from './Navigation'; // Import navigation if it's a separate component

function Homepage1() {
  return (
    <div>
      <Navigation /> {/* Context-specific navigation */}
      <h1>Homepage 1 Content</h1>
      {/* Page content */}
    </div>
  );
}

export default Homepage1;
