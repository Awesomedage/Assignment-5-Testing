// CartItem.jsx

function CartItem({ product, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />

      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemoveFromCart(product.id)} // 
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
