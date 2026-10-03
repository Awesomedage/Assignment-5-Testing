// ProductsPage.jsx
import ProductCard from "../components/ProductCard";

function ProductsPage({ products, onAddToCart }) {
  return (
    <div className="products-page">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductsPage;
