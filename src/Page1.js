import React from 'react';
import Navigation from './Navigation'; // Import navigation if it's a separate component

function Page1() {
  return (
    <div>
      <Navigation /> {/* Context-specific navigation */}
      <h1>Page1 Content</h1>
      {/* Page content */}
    </div>
  );
}

export default Page1;
