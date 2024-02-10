import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/individual">For Individual</Link>
      <Link to="/investments">Investments</Link>
      <Link to="/business">For Business</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
      
    </nav>
  );
}

export default Navigation;