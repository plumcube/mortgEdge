import React from 'react';
import Navigation from './Navigation'; // Import navigation if it's a separate component

function Homepage3() {
  return (
    <div>
      <Navigation /> {/* Context-specific navigation */}
      <h1>Homepage 3 Content</h1>
      {/* Page content */}
    </div>
  );
}

export default Homepage3;
