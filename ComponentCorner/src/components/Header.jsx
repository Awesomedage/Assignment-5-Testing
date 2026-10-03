import './Header.css';
import { Link } from 'react-router-dom';
// Header.jsx
function Header({ cartCount }) {
  return (
    <header className="app-header">
      <h1 className="app-title">ComponentCorner</h1>

      <nav className="nav-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>

      <Link to="/cart" className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;