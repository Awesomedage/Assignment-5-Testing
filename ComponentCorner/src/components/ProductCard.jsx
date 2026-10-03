import './ProductCard.css';
import { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description } = product;
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">${price}</span>
        </div>
      </div>

      <p className="product-description">
        {description}
      </p>

      <div className="product-actions">
        <button className="action-btn" onClick={handleAddToCart}>
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
        <button className="action-btn">Wishlist</button>
      </div>
    </div>
  );
}

export default ProductCard;
