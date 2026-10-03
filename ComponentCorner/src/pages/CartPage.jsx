// CartPage.jsx
import CartItem from "../components/CartItem";

function CartPage({ cartItems, onRemoveFromCart }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))
      )}
    </div>
  );
}

export default CartPage;
