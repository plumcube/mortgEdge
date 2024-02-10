import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Page 1</Link>
      <Link to="/homepage2">Page 2</Link>
      <Link to="/homepage3">Page 3</Link>
    </nav>
  );
}

export default Navigation;